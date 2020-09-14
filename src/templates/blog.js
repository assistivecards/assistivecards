import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={`${frontmatter.title}`} description={`Project description for ${frontmatter.title}`}/>
      <div className="content">
        <div className="blogPostCarrier">
          <h1>{frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <p style={{opacity: 0.6}}>Last edited at {frontmatter.date}</p>

          <h2>Other Posts</h2>
          {posts.edges.map((post, i) => {
            return (
              <li key={i}>
                <Link to={post.node.frontmatter.slug}>{post.node.frontmatter.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
    posts: allMarkdownRemark(sort: {
          fields: [frontmatter___date]
          order: DESC
        }) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
          }
        }
      }
  }
`
