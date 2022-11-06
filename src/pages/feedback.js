import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"

const FeedbackPage = ({ language }) => (
  <Layout>
    <SEO title="Feedback" />
    <div className="content">
      <div className="thanksContent">
        <img src={require("../images/owl.svg")} style={{ width: "150px", marginBottom: "0.4rem" }} alt="Happy SVG" />
        <p style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem" }}>We'd love to hear your feedback!</p>
        <p style={{ marginBottom: "0.3rem" }}>If you have any ideas/suggestions/questions;</p>
        <p>feel free to send us an email at <a href="mailto:info@assistivecards.com">info@assistivecards.com</a></p>
      </div>
    </div>
  </Layout >
)

export default FeedbackPage
