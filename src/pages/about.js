import React from "react"
import { Link } from "gatsby"

import PageTransition from "gatsby-plugin-page-transitions"
import { style } from "./index"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const SecondPage = () => (
//   <Layout>
//     <SEO title="Page two" />
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

const Slide = () => (
  <PageTransition transitionTime={750}>
    <div style={style}>
      <h1>Author About</h1>
      <Link to="/">To Author Home</Link>
      {/* <Link to="/none">To No Transition</Link> */}
      {/* <Link to="/multiple">To Multiple Transitions</Link> */}
    </div>
  </PageTransition>
)

export default Slide
