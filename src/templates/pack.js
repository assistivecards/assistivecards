import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { pack } = data;
  return (
    <Layout>
      <SEO title={`${pack.locale.en}`} description={`Project description for ${pack.locale.en}`}/>
      <h1>{pack.locale.en}</h1>

      <p style={{opacity: 0.6}}>Last edited at {pack.color}</p>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    pack(slug: { eq: $slug }) {
      slug
      color
      count
      id
      locale {
        en
      }
    }
  }
`
