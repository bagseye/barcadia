import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        return <h1>{data.site.siteMetadata.title}</h1>
      }}
    />
  )
}

export default RegularHeader
