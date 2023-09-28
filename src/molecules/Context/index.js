import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Context } from "@app/store"
export default ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          email
          github
          instagram
          linkedin
          twitter
          mediumBlogUsername
          phoneNumber
        }
      }
    }
  `)

  let { site } = data
  let { siteMetadata } = site

  return <Context.Provider value={siteMetadata}>{children}</Context.Provider>
}
