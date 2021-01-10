import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: `https://assistivecards.com/`,
      name: "AssistiveCards",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://assistivecards.com/{search_term_string}/",
        "query-input": "required name=search_term_string"
      }
    }
]

schemaOrgJSONLD.push(
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "AssistiveCards",
      "url": "https://assistivecards.com",
      "logo": "https://assistivecards.com/icons/icon-512x512.png"
    }
)

function BreadCrumbs({ links }) {
  if (links) {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": links.map((link, i) => {
          if(link.link){
            let linkWithSlash = link.link[0] != "/" ? "/" + link.link: link.link;
            return ({
              "@type": "ListItem",
              "position": i+1,
              "item": {
                "@id": `https://assistivecards.com${linkWithSlash}`,
                "name": `${link.title}`
              }
            });
          }
        })
      }
    );

    return(
      <>
        <Helmet>
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
          </script>
        </Helmet>

        <div className={"breadcrumb"}>
          <div className={"breadcrumbList"}>
            {links.map((crumb, i) => {
              if(i != 0){
                return(
                  <>
                  <div key={i} className={"breadcrumbListItem"}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill={"#e1e1e1"}>
                      <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"/>
                      <path fill="none" d="M0,0h24v24H0V0z"/>
                    </svg>
                    <Link to={crumb.link}>
                      <span className={"breadcrumbLink"}>{crumb.title}</span>  
                    </Link>
                  </div>
                  </>
                )
              } else{
                return(
                  <Link key={i} href={`/`}>
                    <span className={"breadcrumbLink"}>{crumb.title}</span>
                  </Link>
                )
              }
            })}
          </div>
        </div>
      </>
    );
  }else{
    return null;
  }
}

export default BreadCrumbs