import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import T from "../ui"

const Header = ({ siteTitle, language }) => {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <div className="header">
        <div className="headerCarrier">
          <div className="headerLinks">
            <Link to={`/`}>
              <img src={require("../images/logo.svg")} className="logo"/>
            </Link>
            <div className="menuToggler" onClick={() => setMenu(!menu)}>
              <svg version="1.1" width={34} height={34} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              	 viewBox="0 0 460.713 460.713">
              	<rect y="115.356" width="302" height="30"/>
              	<polygon points="335.786,202.231 398.25,264.694 460.713,202.232 	"/>
              	<rect y="315.356" width="302" height="30"/>
              	<rect y="215.356" width="302" height="30"/>
              </svg>
            </div>
            <div className={menu ? "menu mobileMenuActive" : "menu mobileMenuPassive"}>
              <Link to={`/${language}/packs/`}>{T(language, "allpacks")}</Link>
              <Link to={`/licensing/`}>{T(language, "licensing")}</Link>
              <Link to={`/leeloo/`}>{T(language, "leeloo_aac")}</Link>
              <Link to={`/blog/`}>{T(language, "blog")}</Link>
              <Link to={`/search/`}><img src={require("../images/search.svg")} width={18} height={18} /></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
