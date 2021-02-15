import React, {useEffect} from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"

export default function Template({
  data, path // this prop will be injected by the GraphQL query below.
}) {

  let openCheckout = () => {

    window.Paddle.Setup({ vendor: 106664 });
    window.Paddle.Checkout.open({ product: 645445 });
	}

  return (
    <Layout language={"en"}>
      <Helmet>
        <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
      </Helmet>
      <SEO title="Licensing" description="Helps non-verbal kids to communicate with their parents, teachers and friends."/>
      <div className="content">
        <div className="blogPostCarrier">
          <h1>Licensing</h1>
          <p>Assistive Cards are free for personal and non-commercial projects, and you are required to give proper attribution.</p>
          <p>Check details for using in non-commercial products at <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a></p>

          <h2>How to Attribute</h2>
          <p>If you are building a website, you can add a hyperlink to your html page like;</p>
          <code>Cards from &lt;a href="https://assistivecards.com"&gt;Assistive Cards&lt;/a&gt;</code>
          <p></p>
          <p>If you are building an app or some sort of medium you are not able to add a link, you can mention Assistive Cards in the "Licenses" or "About" screen of your application.</p>

          <h2>Purchasing a Commercial License</h2>
          <p>If you want to use Assistive Cards Illustrations and Assistive Phrases on a commercial project, you will need to purchase a license from us.</p>
          <p>This license is redeemed for the individual or the company that purchases, this means you can use the same license on different projects of yours (as individual) or your company.</p>

          <p><strong>One-time Payment: $99</strong></p>
          <p>We will also send you all the Illustrations in SVG and PNG format, and JSON files in a single .zip file via <em>Paddle</em>.</p>
          <div className="btn" onClick={() => openCheckout()}>Buy a License ($99)</div>
          <p style={{fontSize: 12}}>Prices may differ depending on your location, currency rates and VAT.<br/>
          We collect payments using Paddle.com's services with the company name Dream Oriented Ltd<br/>
          <a href="https://paddle.com/legal-buyers/" target="_blank">Paddle Buyer Terms and Conditions</a></p>
        </div>
      </div>
    </Layout>
  )
}
