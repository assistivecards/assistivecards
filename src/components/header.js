import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import T from "../ui"

const Header = ({ siteTitle, language }) => (
  <header>
    <div className="header">
      <div className="headerCarrier">
        <div className="headerLinks">
          <Link to={`/`}>
            <img src={require("../images/logo.svg")} className="logo"/>
          </Link>
          <div className="menu">
            <Link to={`/${language}/packs/`}>{T(language, "allpacks")}</Link>
            <Link to={`/${language}/licensing/`}>{T(language, "licensing")}</Link>
            <Link to={`/leeloo/`}>{T(language, "leeloo_aac")}</Link>
            <Link to={`/blog/`}>{T(language, "blog")}</Link>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
