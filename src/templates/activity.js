import React, { useState } from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"

import BreadCrumbs from "../components/breadcrumb"

export default function Template({
  data, path // this prop will be injected by the GraphQL query below.
}) {
  const { activity } = data;

  let [modal, setModal] = useState(false);

  let toggleModal = () => {
    if(modal){
      setModal(false)
    } else {
      setModal(true)
    }
  }

  let language = path.split("/")[1];
  if(language !== "en"){
    return null;
  }


  return (
    <Layout language={language}>
      <SEO title={`${activity.title} Activity`} description={`Download free ${activity.title} assistive activity illustration in PNG format. Free vector ${activity.title} illustration and vector.`} image={`https://api.assistivecards.com/activities/assets/${activity.slug}.png`} />
      <div className="content">
        <BreadCrumbs links={[
            {title: "Home", link: "/"},
            {title: "Activities", link: `/${language}/activities`}
          ]} />
        <div className="contentHolder">
          <div className="contentLeft">
            <div className="contentLeftOne">
              <h1>{activity.title} Assistive Activity</h1>
              <div className="contentCard" style={{backgroundColor: "#f6f5fd"}}>
              <img src={`https://api.assistivecards.com/activities/assets/${activity.slug}.png`} style={{width: "90%"}} alt={`${activity.title} SVG, PNG Vector`}/>
              </div>
              <p style={{opacity: 0.6, marginTop: 10}}>Download free {activity.title} assistive activity illustration in PNG format. Free vector {activity.title} illustration and vector.</p>
              <h3>Related Tags</h3>
              <div className="contentPhrases">
                {activity.search.split(",").map((tag, i) => <span key={i} style={{padding: 5, backgroundColor: "#fafafa", borderRadius: 5, marginRight: 5, paddingLeft: 10, paddingRight: 10, marginBottom: 5}}>{tag}</span>)}
              </div>
            </div>
            <div className="contentLeftTwo">
            <h2>Other Activities</h2>
              <div className="packs">
              xxx
              </div>
            </div>
          </div>

          <div className="contentRight">
            <div className="contentRightOne">
                <div className="downloads" onClick={() => toggleModal()}>
                  <div className="btn">Download</div>
                  <div className={modal ? "downloadItemsActive" : "downloadItems"}>
                    <a className="btn" href={`https://api.assistivecards.com/activities/assets/${activity.slug}.png`}>PNG</a>
                  </div>
                  <p>You'll get PNG format</p>
                </div>
            </div>

            <div className="contentRightTwo">
              <h2>Overview</h2>
              <p className="cardInformation">Category<p className="informationTexts">Assistive Activity Cards</p></p>
              <p className="cardInformation">Last Update<p className="informationTexts">January 22, 2023</p></p>
              <p className="cardInformation">Total Size<p className="informationTexts">340 KB</p></p>
              <p className="cardInformation">License<p className="informationTexts"><Link to="/licensing/">Assistive Cards License</Link></p></p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    activity(slug: { eq: $slug }){
      slug
      title
      search
    }
  }
`
