import React from "react"
import { navigate } from "gatsby"

class IndexPage extends React.Component {
  constructor(){
    super();
    if(typeof window != "undefined"){
      navigate("/blog/samsung-tts-issue");
    }
  }

  render(){
    return (
      <>
      </>
    )
  }
}

export default IndexPage
