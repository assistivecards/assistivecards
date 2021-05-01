import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import T from "../ui"

const Hero = ({ siteTitle, language, packs }) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="hero">

    <div className="headerCarrier" style={{backgroundColor: "#E3F3FF", zIndex: 2}}>
      <div className="headerLinks" style={{padding: "50px 15px 15px 15px"}}>
        <Link to={`/`}>
          <img src={require("../images/logo.svg")} className="logo"/>
        </Link>
        <div className="menuToggler" onClick={() => setMenu(!menu)} style={{backgroundColor: "#ff81a2"}}>
          <svg version="1.1" width={34} height={34} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 460.713 460.713" fill="#fff">
            <rect y="115.356" width="302" height="30"/>
            <polygon points="335.786,202.231 398.25,264.694 460.713,202.232 	"/>
            <rect y="315.356" width="302" height="30"/>
            <rect y="215.356" width="302" height="30"/>
          </svg>
        </div>
        <div className={menu ? "menu mobileMenuActive" : "menu mobileMenuPassive"}>
          <Link to={`/${language}/packs/`}>{T(language, "allpacks")}</Link>
          <Link to={`/licensing/`}>{T(language, "licensing")}</Link>
          <Link to={`/apps/`}>{T(language, "apps")}</Link>
          <Link to={`/blog/`}>{T(language, "blog")}</Link>
          <Link to={`/search/`}>{T(language, "search")}</Link>
        </div>
      </div>
    </div>
      <div className="content">
        <div className="heroLeft">
          <h1 style={{color: "#3E455B", marginTop: 35, marginBottom: 15}}>Make Assistive Apps</h1>
          <p style={{opacity: 0.8}}>Assistive Cards are multilingual AAC card and phrase groups designed for kids' special education.</p>

          <Link to={"/en/packs/"}>
            <div className="btnBig" style={{backgroundColor: "#fff", color: "unset", width: 200}}>See More</div>
          </Link>
        </div>
        <div className="heroRight">
          {packs.edges.slice(0, 16).map((pack, i) => {
            return(
              <div className="rightSvg">
                <img src={`https://api.assistivecards.com/cards/icon/${pack.node.slug}.png`} alt={`${pack.node.locale[language]} SVG`} key={i} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Hero