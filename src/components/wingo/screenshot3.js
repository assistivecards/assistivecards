import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Iphone() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Screen3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div style={{ width: "100%", maxWidth: 700, margin: "auto", padding: 10 }}>
      <Img fluid={data.image.childImageSharp.fluid} style={{ borderRadius: 30 }} />
    </div>
  );
}

export default Iphone;
