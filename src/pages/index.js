import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import T from "../ui"


export default function Template({
  data, path // this prop will be injected by the GraphQL query below.
}) {

  return (
    <Layout language={"en"} noHeader={true}>
      <SEO title="Assistive Cards - AAC Cards Illustrations and Phrases" description="Assistive Cards are multilingual AAC card and phrase inventory designed for kids' special education."/>
      <Hero language={"en"}/>
      <div className="content">
        <div style={{height: 20}}></div>
        <h2>Features</h2>
        <p>Using Assistive Cards, developers and designers can make assistive software and educational games for children, parents can make their own printed AAC boards etc.</p>
        <ul>
          <li>Card and phrase translations support 37 languages.</li>
          <li>Designed with multi-cultural userbase in mind.</li>
          <li>Created using autism and ADHD friendly color palette.</li>
        </ul>

        <h2>Apps and Tools using Assistive Cards</h2>
        <ul>
          <li>Leeloo AAC</li>
          <li>Huni AI</li>
        </ul>
        <p>Do you want your app to be featured here? Contact us.</p>

      </div>
    </Layout>
  )
}
