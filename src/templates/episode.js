import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const EpisodeTemplate = ({
  content,
  contentComponent,
  episodeNo,
  embed,
  download,
  season,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>
              E{episodeNo}S{season} {embed} {download}
            </p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

EpisodeTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  episodeNo: PropTypes.number,
  embed: PropTypes.string,
  download: PropTypes.string,
  season: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const Episode = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { prev, next } = pageContext;

  return (
    <Layout>
      <EpisodeTemplate
        content={post.html}
        contentComponent={HTMLContent}
        episodeNo={post.frontmatter.episodeNo}
        embed={post.frontmatter.embed}
        download={post.frontmatter.download}
        season={post.frontmatter.season}
        helmet={
          <Helmet titleTemplate="%s | Brus kódu">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.title}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
      {prev && (
        <Link to={`/epizoda/${prev.frontmatter.episodeNo}`}>
          Previous: {prev.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link to={`/epizoda/${next.frontmatter.episodeNo}`}>
          Next: {next.frontmatter.title}
        </Link>
      )}
    </Layout>
  );
};

Episode.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Episode;

export const pageQuery = graphql`
  query EpisodeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        episodeNo
        embed
        download
        season
      }
    }
  }
`;
