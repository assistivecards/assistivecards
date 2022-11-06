import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Screenshot1 from "../components/wingo/screenshot1"
import Screenshot2 from "../components/wingo/screenshot2"
import Screenshot3 from "../components/wingo/screenshot3"

export default class Wingo extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Wingo" description="Plan your children's day and communicate their tasks better and easier." />

        <div className="section">
          <div className="sectionDescription right">
            <img src={require("../images/wingo/wingo.png")} style={{ width: 100, height: 100, marginBottom: 25, boxShadow: "0px 0px 5px 1px rgba(99, 110, 181, 0.4)", borderRadius: "50%" }} />

            <h1 style={{ fontSize: 38 }}>Plan your child's day with<br />
              Wingo App</h1>

            <p style={{ fontSize: 23 }}>Plan your children's day and communicate their tasks better and easier.</p>

            <div className="download" style={{ marginBottom: 0 }}>
              <a href="https://apps.apple.com/us/app/wingo-daily-planner-for-kids/id1541521898" target="_blank">
                <img src={require("../images/as.svg")} />
              </a>
              <a onClick={() => alert('coming soon!')}>
                <img src={require("../images/gp.svg")} />
              </a>
            </div>

            <a onClick={() => alert('coming soon!')} style={{ textDecoration: "none", color: "gray" }}>or download APK</a>
          </div>

          <div className="sectionImage right">
            <div className="sectionBackground right">
              <img src={require("../images/blob_wingo.svg")} className="blob right" />
              <img src={require("../images/particals.svg")} className="particals right" />
            </div>
            <Screenshot1 />
          </div>
        </div>


        <div className="section" style={{ flexDirection: "column" }}>
          <Screenshot3 />
          <div className="sectionDescription" style={{ width: "100%" }}>
            <h1 style={{ textAlign: "center" }}>Designed with<br />
              accessibility in mind</h1>

            <div className="sectionList">
              <div>
                <h3>Works in both Phones and Tablets</h3>
                <p>Enjoy Wingo App in both iOS and Android, helping your kid communicate with the use of a phone or a tablet.</p>
              </div>

              <div>
                <h3>Super autism-friendly colors</h3>
                <p>Re-thinking accessibility with the support of Autism friendly color palettes. Every choice of colors are hand-picked from our very own autism friendly color generator.</p>
              </div>

              <div>
                <h3>Supports Text-to-Speech and Haptic Touch</h3>
                <p>Wingo app also has text-to-speech voice capability. Every card pressed will be read by a text-to-speech robot.</p>
              </div>
            </div>
          </div>

        </div>


        <div className="section">
          <div className="sectionImage">
            <div className="sectionBackground">
              <img src={require("../images/blob_wingo.svg")} className="blob" />
              <img src={require("../images/particals.svg")} className="particals" />
            </div>
            <Screenshot2 />
          </div>

          <div className="sectionDescription">
            <h1>Control Wingo<br />
              the way you<br />
              want it</h1>

            <h3>Control app access</h3>
            <p>Option to set control app access within the settings of Wingo app</p>

            <h3>Keep track of activities for the child</h3>
            <p>The progress bar is also great for kids with ADHD, as it helps them stay on task and focus on the activities at hand</p>

            <h3>Family activity section</h3>
            <p>Parents can track their kids' progress and plan family activities</p>
          </div>

        </div>

      </Layout>
    )
  }
}
