import React from "react"
import { Link } from "gatsby"
import headerModule from "../styles/header.module.scss"
import { useStaticQuery, graphql } from "gatsby";
const Header = ({ siteTitle, header }) => {
  

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
   console.log(data);
  return (
    <nav className={`navbar navbar-expand-md ${headerModule.navbar__purple}`}>
      {/* <Link className={`navbar-brand ${headerModule.navbarBrand__white}`} to="/">
          {data.site.siteMetadata.title}
      </Link>

      <button
        className={`navbar-toggler ${headerModule.navbar__toggle_button}`}
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        menu
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className={`nav-link ${headerModule.navlink__purple}`} to="/projects">
              projects
          </Link>
          </li>
          <li className="nav-item">
          <Link className={`nav-link ${headerModule.navlink__purple}`} to="/blog">
              blog
          </Link>
          </li>
          <li className="nav-item">
          <Link className={`nav-link ${headerModule.navlink__purple}`} to="/experience">
              experience
          </Link>
          </li>
          <li className="nav-item">
          <Link className={`nav-link ${headerModule.navlink__purple}`} to="/about">
              about
          </Link>
          </li>
        </ul>
      </div> */}
    <div class="nav-wrapper">
      
      <Link className={`${headerModule.navbarBrand__white}`} to="/">
        {data.site.siteMetadata.title}
      </Link>
    
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
        <Link className={`${headerModule.navlink__purple}`} to="/projects">
          projects
        </Link>
      </li>
        <li>
        <Link className={`${headerModule.navlink__purple}`} to="/blog">
              blog
          </Link>
        </li>
        <li>
        <Link className={`${headerModule.navlink__purple}`} to="/experience">
              experience
          </Link>
        </li>
        <li>
        <Link className={`${headerModule.navlink__purple}`} to="/about">
              about
          </Link>
        </li>
        <li>
        {<a download href={`/yashraj-basan-full-stack-developer-PIET.pdf`} class={`btn ${headerModule.download___resume}`}>
            Download Resume
          </a>}
        </li>
      </ul>
    </div>
    </nav>
  )
}

export default Header
