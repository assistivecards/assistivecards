import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import T from "../ui"
import Menu from "./menu"

const Header = ({ siteTitle, language }) => {

  return (
    <header>
      <div className="header">
        <div className="headerCarrier">
          <div className="headerLinks">
            <Link to={`/`}>
              <img src={require("../images/logo.svg")} className="logo"/>
            </Link>
            <Menu language={language} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
