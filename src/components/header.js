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
              <Link to={`/huni/`}>{T(language, "huni")}</Link>
              <Link to={`/blog/`}>{T(language, "blog")}</Link>
              <Link to={`/search/`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="headerSearchIcon" viewBox="0 0 24 24" strokeWidth="3" stroke="#1A1A1A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
