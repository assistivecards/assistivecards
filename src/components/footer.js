import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div className="footerCarrier">
      <div className="footerDecor">
        <img src={require("../images/decor.svg")} style={{width: "100%"}}/>
      </div>

      <div className="footerInner">
        <div style={{fontSize: 21, textAlign: "center", lineHeight: 1.5, marginTop: 70}}>
          Made with love by<br/>
          <a href="https://buraktokak.com/" target="_blank">Burak</a> & <a href="https://twitter.com/humbleuidesigns" target="_blank">Hannah</a>
        </div>
        <img src={require("../images/app.png")} style={{width: 100, height: 100}}/>
      </div>
      <div className="footerLinks">
        <div>
          &copy; Copyright <a href="http://dreamoriented.org/" target="_blank" style={{textDecoration: "none"}}>Dream Oriented Limited</a>
        </div>
        <div>
          <a href="https://dreamoriented.org/leeloo-feedback" target="_blank">Suggest AAC Card</a>
          <a href="https://dreamoriented.org/privacypolicy" target="_blank">Privacy Policy</a>
          <a href="https://dreamoriented.org/leeloo-feedback" target="_blank">Send Feedback</a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
