import React, { useState } from "react"

const Unicef = () => {
  return (
    <div className="unicef">
      <img src={require("../images/unicef_white.svg")} style={{width: 150}}/>
      <div>
        <h3>Featured by UNICEF</h3>
        <p>Our apps made with Assistive Cards got featured in the UNICEF's COVID-19 app catalogue.</p>
      </div>
    </div>
  )
}

export default Unicef
