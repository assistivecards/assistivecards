import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import T from "../ui"
import titleCase from "../titleCase"

const Footer = ({ siteTitle, language }) => (
  <div className="footer">
    <div className="footerCarrier">
      <div className="footerDecor">
        <img src={require("../images/decor.svg")} style={{ width: "100%" }} />
      </div>

      <div className="footerInner">
        <div style={{ fontSize: 21, textAlign: "center", lineHeight: 1.5, marginTop: 70 }}>
          {T(language, "made_by")}<br />
          <Link to="/team/">{T(language, "awesome_people")}</Link>
        </div>
        <div>
          <Link to={`/leeloo/`}><img src={require("../images/leeloo/app.png")} style={{ width: 80, height: 80, boxShadow: "0px 0px 5px 1px rgba(105, 137, 255, 0.4)", borderRadius: "50%" }} alt={"leeloo aac"} /></Link>
          <Link to={`/huni/`}><img src={require("../images/huni/huni.png")} style={{ width: 80, height: 80, boxShadow: "0px 0px 5px 1px rgba(99, 178, 181, 0.4)", borderRadius: "50%" }} alt={"huni"} /></Link>
          <Link to={`/chamur/`}><img src={require("../images/chamur/chamur.png")} style={{ width: 80, height: 80, boxShadow: "0px 0px 5px 1px rgb(99, 181, 128, 0.4)", borderRadius: "50%" }} alt={"chamur"} /></Link>
          <Link to={`/wingo/`}><img src={require("../images/wingo/wingo.png")} style={{ width: 80, height: 80, boxShadow: "0px 0px 5px 1px rgba(99, 110, 181, 0.4)", borderRadius: "50%" }} alt={"wingo"} /></Link>
        </div>
      </div>
      <div className="footerLinks">
        <div>
          &copy; {titleCase(T(language, "copyright"))} <a href="http://dreamoriented.org/" target="_blank" style={{ textDecoration: "none" }}>Dream Oriented Limited</a>
        </div>
        <div>
          <a href="https://dreamoriented.org/leeloo-feedback" target="_blank">{T(language, "suggest")}</a>
          <a href="https://dreamoriented.org/privacypolicy" target="_blank">{T(language, "privacy")}</a>
          <a href="https://dreamoriented.org/leeloo-feedback" target="_blank">{T(language, "feedback")}</a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
