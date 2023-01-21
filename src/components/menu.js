import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import T from "../ui"

const Menu = ({ language }) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
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
        <Link to={`/${language}/packs/`}>Packs</Link>
        <Link to={`/${language}/activities/`}>Activities</Link>
        <Link to={`/apps/`}>{T(language, "apps")}</Link>
        <Link to={`/games/`}>{T(language, "games")}<span className="soon">SOON</span></Link>
        <Link to={`/blog/`}>{T(language, "blog")}</Link>
        {false &&
          <Link to={`/search/`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="headerSearchIcon" viewBox="0 0 24 24" strokeWidth="3" stroke="#1A1A1A" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </Link>
        }
      </div>
    </>
  )
}

export default Menu
