import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"

const NotFoundPage = ({ language }) => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="content">
      <div className="notFound"><img src={require("../images/fourzerofour.svg")} /></div>
      <div className="notText">{T(language, "opps")}</div>
      <div style={{fontSize: "1.2rem", opacity: "0.7", textAlign: "center", paddingTop: "0.5rem", marginBottom: "-2rem", position: "relative", zIndex: 100}}>
        {T(language, "not_found")} <Link to={"/"}>{T(language, "return_home")}</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
