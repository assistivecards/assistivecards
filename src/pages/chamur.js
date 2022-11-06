import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Screenshot1 from "../components/chamur/screenshot1"
import Screenshot2 from "../components/chamur/screenshot2"
import Screenshot3 from "../components/chamur/screenshot3"

export default class Chamur extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Chamur" description="An educational scavenger hunt game that uses object recognition via device camera, and its power." />

        <div className="section">
          <div className="sectionDescription right">
            <img src={require("../images/chamur/chamur.png")} style={{ width: 100, height: 100, marginBottom: 25, boxShadow: "0px 0px 5px 1px rgb(99, 181, 128, 0.4)", borderRadius: "50%" }} />

            <h1 style={{ fontSize: 38 }}>Find in house items with<br />
              Chamur App</h1>

            <p style={{ fontSize: 23 }}>An educational scavenger hunt game that uses object recognition via device camera, and its power.</p>

            <div className="download" style={{ marginBottom: 0 }}>
              <a href="https://apps.apple.com/us/app/chamur-find-in-house-items/id1559243555" target="_blank">
                <img src={require("../images/as.svg")} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=org.dreamoriented.chamur" target="_blank">
                <img src={require("../images/gp.svg")} />
              </a>
            </div>

            <a href="https://apkpure.com/tr/chamur-scavenger-hunt-find-i/org.dreamoriented.chamur" style={{ textDecoration: "none", color: "gray" }} target="_blank">or download APK</a>
          </div>

          <div className="sectionImage right">
            <div className="sectionBackground right">
              <img src={require("../images/blob_chamur.svg")} className="blob right" />
              <img src={require("../images/particals.svg")} className="particals right" />
            </div>
            <Screenshot1 />
          </div>
        </div>


        <div className="section" style={{ flexDirection: "column", marginTop: -50 }}>
          <div className="sectionDescription" style={{ width: "100%" }}>
            <h1 style={{ textAlign: "center" }}>Designed with<br />
              accessibility in mind</h1>

            <div className="sectionList">
              <div>
                <h3>Works in both Phones and Tablets</h3>
                <p>Enjoy Chamur App in both iOS and Android, helping your kid communicate with the use of a phone or a tablet.</p>
              </div>

              <div>
                <h3>Super autism-friendly colors</h3>
                <p>Re-thinking accessibility with the support of Autism friendly color palettes. Every choice of colors are hand-picked from our very own autism friendly color generator.</p>
              </div>

              <div>
                <h3>Supports Text-to-Speech and Haptic Touch</h3>
                <p>Chamur app also has text-to-speech voice capability. Every card pressed will be read by a text-to-speech robot.</p>
              </div>
            </div>
          </div>

        </div>


        <div className="section">
          <div className="sectionImage">
            <div className="sectionBackground">
              <img src={require("../images/blob_chamur.svg")} className="blob" />
              <img src={require("../images/particals.svg")} className="particals" />
            </div>
            <Screenshot2 />
          </div>

          <div className="sectionDescription">
            <h1>Control Chamur<br />
              the way you<br />
              want it</h1>

            <h3>Control app access</h3>
            <p>Option to set control app access within the settings of Chamur app</p>

            <h3>Educational scavenger hunt game</h3>
            <p>Uses object recognition via device camera, and its powered by Assistive Cards assets</p>

          </div>

        </div>

      </Layout>
    )
  }
}
