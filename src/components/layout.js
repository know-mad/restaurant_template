/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
      <div className='container'>
        <main>{children}</main>
        <footer>
          <div className='footer-top'>
            <div className='footer-top__info'>
              <h4>CONTACT</h4>
              <p>Tel: (555) 555-7024</p>
              <p>Email: restaurant@email.com</p>
            </div>
            <div className='footer-top__info'>
              <h4>RESTAURANT HOURS</h4>
              <p><span style={{fontWeight: `bold`}}>Mon - Fri:</span> 9am - 10pm</p>
              <p><span style={{fontWeight: `bold`}}>Sat - Sun:</span> 9am - 11pm</p>
            </div>
            <div className='footer-top__info'>
              <h4>SOCIAL MEDIA</h4>
              <p>facebook</p>
              <p>instagram</p>
              <p>yelp</p>
              <p>tripadvisor</p>
            </div>
          </div>
          <div className='footer-bottom'>
            <p>Copyright © {new Date().getFullYear()} Restaurant, All right reserved.</p>
            <p>Built By: David Velez</p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
