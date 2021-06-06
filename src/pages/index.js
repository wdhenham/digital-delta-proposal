import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Context from "../components/context"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Context />
  </Layout>
)

export default IndexPage
