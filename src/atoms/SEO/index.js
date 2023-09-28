import React from "react"
import PropTypes from "prop-types"

const SEO = ({ title = "", description = "", twitter = "" }) => {
  const host = typeof window !== "undefined" ? window.location.host : ""

  let article =
    typeof window !== "undefined"
      ? window?.location?.pathname?.includes("case-study")
      : false

  let url = (typeof window !== "undefined" ? window.location.href : "") || null

  let image = `${host}/author.jpg`

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {url && <meta property="og:url" content={url} />}
      {article && <meta property="og:type" content="article" />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitter ? <meta name="twitter:creator" content={twitter} /> : ""}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </>
  )
}

export default SEO
