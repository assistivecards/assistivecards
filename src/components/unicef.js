import React, { useState } from "react"

const Unicef = () => {
  return (
    <a href="https://www.unicef.org/appcatalogue/leeloo-aac" target="_blank" style={{ textDecoration: "none"}}> 
      <div className="unicef">
        <img src={require("../images/unicef_white.svg")} style={{width: 150}}/>
        <div>
          <h3>Featured by UNICEF</h3>
          <p>Our apps made with Assistive Cards got featured in the UNICEF's COVID-19 app catalogue.</p>
        </div>
      </div>
    </a>
  )
}

export default Unicef
