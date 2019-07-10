import React from "react"

import Layout from "../components/layout"
import About from '../components/about/About'
import Nutshell from "../components/about/Nutshell";

const AboutPage = ({data}) => (
  <Layout>
    <About items={data.skills}/>
    <Nutshell/>
  </Layout>
)

export const query = graphql`
{
    skills:allContentfulSkills {
    edges {
      node {
        id
        name
        value  
      }
    }
  }
}
`

export default AboutPage
