import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import T from "../ui"

export default function Template({
  data, path
}) {
  return (
    <Layout language={"en"}>
      <SEO title="Privacy Policy" description="Privacy Policy for Assistive Cards - Learn how we collect, use, and protect your Personally Identifiable Information."/>
      <div className="content">
        <div className="blogPostCarrier">
          <h1>Privacy Policy</h1>
          
          <p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>

          <h2>What personal information do we collect from the people that visit our blog, website or app?</h2>
          <p>When ordering or registering on our site, as appropriate, you may be asked to enter your name or other details to help you with your experience.</p>

          <h2>When do we collect information?</h2>
          <p>We collect information from you when you register on our site or enter information on our site.</p>

          <h2>How do we use your information?</h2>
          <p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
          <ul>
            <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
            <li>To improve our website in order to better serve you.</li>
          </ul>

          <h2>How do we protect your information?</h2>
          <p>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.</p>
          <p>We use regular Malware Scanning.</p>
          <p>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</p>
          <p>We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information.</p>
          <p>All transactions are processed through a gateway provider and are not stored or processed on our servers.</p>

          <h2>Do we use 'cookies'?</h2>
          <p>We do not use cookies for tracking purposes.</p>
          <p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</p>
          <p>If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.</p>

          <h2>Third-party disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.</p>
          <p>However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>

          <h2>Third-party links</h2>
          <p>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>

          <h2>Google</h2>
          <p>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en" target="_blank" rel="noopener noreferrer">https://support.google.com/adwordspolicy/answer/1316548?hl=en</a></p>
          <p>We have not enabled Google AdSense on our site but we may do so in the future.</p>

          <h2>California Online Privacy Protection Act</h2>
          <p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: <a href="http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf" target="_blank" rel="noopener noreferrer">http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf</a></p>

          <p><strong>According to CalOPPA, we agree to the following:</strong></p>
          <ul>
            <li>Users can visit our site anonymously.</li>
            <li>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.</li>
            <li>Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</li>
            <li>You will be notified of any Privacy Policy changes: On our Privacy Policy Page</li>
            <li>Can change your personal information: By logging in to your account</li>
          </ul>

          <h2>How does our site handle Do Not Track signals?</h2>
          <p>We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</p>

          <h2>Does our site allow third-party behavioral tracking?</h2>
          <p>It's also important to note that we allow third-party behavioral tracking.</p>

          <h2>COPPA (Children Online Privacy Protection Act)</h2>
          <p>When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</p>
          <p>We market to, but do not collect information from children under 13.</p>
          <p>We don't let third-parties, including ad networks or plug-ins collect PII from children under 13.</p>
          <p>Additionally we don't monetize our products that target children under 13 with ads, in the cases we do or will; a human personnel of ours will check the displayed advertises for suitability for kids.</p>
          <p>In order to remove your child's information please contact the following personnel via our <Link to="/support/">contact page</Link>.</p>

          <p><strong>We adhere to the following COPPA tenants:</strong></p>
          <ul>
            <li>Parents can review, delete, manage or refuse with whom their child's information is shared through contacting us directly.</li>
            <li>For apps and websites we sustain made especially for kids, parents will be prompted with a conversation where they can explicitly allow or deny the collection of usability data from kids under 13.</li>
          </ul>

          <h2>Legal Compliance</h2>
          <p>As a registered legal entity Dream Oriented Yazılım ve Bilişim Limited Şirketi, adheres with the Republic of Turkey internet data collection, distribution and publishing laws with the law id of 5651.</p>

          <p style={{marginTop: 40}}>
            <Link to="/">Home</Link> | <Link to="/licensing/">Licensing</Link> | <Link to="/privacy/">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

