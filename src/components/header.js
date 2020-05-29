import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo">
      <Link to={"/"}>
      </Link>
    </div>
  </header>
)

export default Header
