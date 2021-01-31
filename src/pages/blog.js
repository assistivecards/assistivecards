import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"

import BreadCrumbs from "../components/breadcrumb"

export default function Template({
  data, path, title // this prop will be injected by the GraphQL query below.
}) {
  const { posts } = data;

  return (
    <Layout language={"en"}>
      <SEO title="Blog Posts" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>
      <div className="content">
        <BreadCrumbs links={[
          {title: "Home", link: "/"}
        ]} />
        <div className="blogPostCarrier">
          <h1>Blog Posts</h1>
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
  query {
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