import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = props => {
  const query = graphql`
    query SEO {
      site {
        siteMetadata {
          title
          description
        }
        host
      }
    }
  `
  const { site } = useStaticQuery(query)

  const { title, description, host } = site.siteMetadata

  const seo = {
    title: props.title || title,
    description: props.description || description,
    image: `${host}${props.image || null}`,
    url: `${host}${props.pathname || null}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(props.article ? true : null) && (
        <meta property="og:type" content="article" />
      )}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {props.twitterUsername && (
        <meta name="twitter:creator" content={props.twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
