import React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"

import Cover from '../components/home/Cover'
import Works from '../components/home/Works'

const IndexPage = ({data}) => (
  <Layout>
    <Cover />
    <Works items={data.works}/>
  </Layout>
)

export const query = graphql`
{
    works:allContentfulWorks {
    edges {
      node {
        id
        title
        category
        image {
          fluid(maxWidth: 600, maxHeight: 600) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        description {
          description
        }
        link
      }
    }
  }
}
`

export default IndexPage
