import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"

const ThanksPage = ({ language }) => (
  <Layout>
    <SEO title="Thanks" />
    <div className="content">
      <div className="thanksContent">
        <img src={require("../images/happy.svg")} style={{width: "150px"}} alt="Happy SVG"/>
        <p style={{fontSize: "1.5rem", fontWeight: "600", marginBottom: "-0.5rem"}}>Thanks for purchasing</p>
        <p style={{fontSize: "1.2rem", opacity: "0.7", paddingTop: "0.5rem"}}>If you have any questions contact us.</p>
        <p><Link to={"/"}>{T(language, "return_home")}</Link></p>
      </div>
    </div>
  </Layout>
)

export default ThanksPage
