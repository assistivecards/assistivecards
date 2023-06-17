import React, {useEffect} from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"

export default function Template({
  data, path // this prop will be injected by the GraphQL query below.
}) {

  return (
    <Layout language={"en"}>
      <SEO title="Support" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>
      <div className="content">
        <div className="blogPostCarrier">
          <h1>Support & Feedback</h1>
          <p>Assistive Cards is an open source multilingual library of phrase cards and speech sets designed for special educational needs of kids.</p>
          <p>Our mission is to make a consistent, multicultural, and kid-friendly library of phrase groups and visual assets that are easily accessible to developers and designers, so that they can create more effective, faster, more engaging educational solutions, like apps and games.</p>

          <p>We currently offer products for isolated kids in need of communication assistance, such as <a href="/apps/">Leeloo AAC</a> and <a href="/games/">educational games</a> made with Assistive Cards Library.</p>
          <p>We develop educational apps and games and our library is used by thousands of families every month. So join us in our mission to give every kid a chance at a better life.</p>

          <p>Contact us for your issues or feedbacks for our apps or games using our support email address.</p>
          <p><a href="mailto:support@assistivecards.com" target="_blank">support@assistivecards.com</a></p>
          <p>Please expect a response in 3 business days.</p>
        </div>
      </div>
    </Layout>
  )
}
