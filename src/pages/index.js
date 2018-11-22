import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: episodes } = data.allMarkdownRemark

    return (
      <Layout>
        <article class='post'>
          <h1 class='title'>Archiv epizod</h1>
        </article>
        <div class='archive'>
          {episodes.map(({ node: post }) => (
            <div class='archive-post' key={post.id}>
              <h2>
                <Link to={`/epizoda/${post.frontmatter.episodeNo}`}>
                  {post.frontmatter.title}
                </Link>
              </h2>
              <time datetime='2015-09-11'>{post.frontmatter.date}</time>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "episode" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "Do Mo YYYY", locale: "cs")
            episodeNo
          }
        }
      }
    }
  }
`
