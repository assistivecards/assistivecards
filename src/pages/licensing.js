import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"

import BreadCrumb from "../components/breadcrumb"
import BreadCrumbs from "../components/breadcrumb"

export default function Template({
  data, path // this prop will be injected by the GraphQL query below.
}) {

  return (
    <Layout language={"en"}>
      <SEO title="Licensing" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>
      <div className="content">
        <BreadCrumbs links={[
          {title: "Home", link: "/"},
          {title: "Licensing", link: "/licensing"}
        ]} />
        <div className="blogPostCarrier">
          <h1>Licensing</h1>
          <p>Assistive Cards are free for personal and non-commercial projects, and you are required to give proper attribution.</p>
          <p>Check details for using in non-commercial products at <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a></p>

          <h2>How to Attribute</h2>
          <p>If you are building a website, you can add a hyperlink to your html page like;</p>
          <code>Cards from &lt;a href="https://assistivecards.com"&gt;Assistive Cards&lt;/a&gt;</code>
          <p></p>
          <p>If you are building an app or some sort of medium you are not able to add a link, you can mention Assistive Cards in the "Licenses" or "About" screen of your application.</p>

          <h2>Purchasing a Commercial License</h2>
          <p>If you want to use Assistive Cards Illustrations and Assistive Phrases on a commercial project, you will need to purchase a license from us.</p>
          <p>This license is redeemed for the individual or the company that purchases, this means you can use the same license on different projects of yours (as individual) or your company.</p>

          <p><strong>One-time Payment: $99</strong></p>
          <p>We will also send you all the Illustrations in SVG and PNG format, and JSON files in a single .zip file via <em>Paddle</em>.</p>
          <p><em style={{color: "red"}}>We will have a buy button here soon!</em></p>
        </div>
      </div>
    </Layout>
  )
}
