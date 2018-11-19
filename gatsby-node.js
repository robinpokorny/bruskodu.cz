const partition = require("lodash/fp/partition");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { order: DESC, fields: [fields___slug] }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              episodeNo
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()));
    return Promise.reject(result.errors);
  }

  const edges = result.data.allMarkdownRemark.edges;

  const [episodes, pages] = partition(
    ["node.frontmatter.templateKey", "episode"],
    edges
  );

  episodes.forEach(({ node }, index) => {
    const { id, frontmatter } = node;
    const { episodeNo } = frontmatter;
    const url = `/epizoda/${episodeNo}`;

    const isFirst = index === 0;
    const isLast = index === episodes.length - 1;
    const next = isFirst ? null : episodes[index - 1].node;
    const prev = isLast ? null : episodes[index + 1].node;

    createRedirect({
      fromPath: `/${episodeNo}`,
      toPath: url,
      isPermanent: true,
      redirectInBrowser: true
    });

    createPage({
      path: url,
      component: path.resolve(`src/templates/episode.js`),
      context: {
        id,
        url,
        prev,
        next
      }
    });
  });

  pages.forEach(({ node }) => {
    const { id, frontmatter, fields } = node;
    const { templateKey } = frontmatter;
    const { slug } = fields;

    createPage({
      path: slug,
      component: path.resolve(`src/templates/${templateKey}.js`),
      context: {
        id
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
