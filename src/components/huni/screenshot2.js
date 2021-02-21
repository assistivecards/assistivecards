import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Iphone() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "huni/Screen2.png" }) {
        childImageSharp {
          fluid(maxWidth: 828) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="deviceScreenshot">
      <img src={require("../../images/Device.svg")} />
      <div className="shotHolder">
        <Img fluid={data.image.childImageSharp.fluid} style={{borderRadius: 30}}/>
      </div>
    </div>
  );
}

export default Iphone;
