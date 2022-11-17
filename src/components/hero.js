import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Menu from "./menu"
import T from "../ui"

const Hero = ({ siteTitle, language, packs }) => {
  return (
    <div className="hero">

    <div className="headerCarrier" style={{backgroundColor: "#E3F3FF", zIndex: 2}}>
      <div className="headerLinks" style={{padding: "50px 15px 15px 15px"}}>
        <Link to={`/`}>
          <img src={require("../images/logo.svg")} className="logo"/>
        </Link>
        <Menu language={language} />
      </div>
    </div>
      <div className="content">
        <div className="heroLeft">
          <h1 style={{color: "#3E455B", marginTop: 35, marginBottom: 15}}>Make Assistive Apps</h1>
          <p style={{opacity: 0.8}}>Assistive Cards are open source multilingual PECS card and phrase groups designed for kids' special education.</p>

          <Link to={"/en/packs/"} style={{textDecoration: "none"}}>
            <div className="btnBig" style={{backgroundColor: "#fff", color: "unset", width: 180}}>See More</div>
          </Link>
        </div>
        <div style={{display: "flex", flex: 1}}></div>
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
