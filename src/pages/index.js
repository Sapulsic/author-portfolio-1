import React from "react"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"


// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// import { BrowserRouter, Switch, Route } from "react-router-dom"

export const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/about/">Go to page 2</Link>
  // </Layout>\
  <PageTransition transitionTime={750}>
    <div style={style}>
      <h1>Author Home</h1>
      <Link to="/about"> To Author About</Link>
      {/* <Link to="/none">To No Transition</Link> */}
      {/* <Link to="/multiple">To Multiple Transitions</Link> */}
    </div>
  </PageTransition>
)

export default IndexPage
