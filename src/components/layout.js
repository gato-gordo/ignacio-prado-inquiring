import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, description, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        [<h1
          style={{
            ...scale(0.9),
            marginBottom: rhythm(0.9),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>,
        <h2 style={{ marginTop: 0 }}>{ description }</h2>
        ])
    } else {
      header = (
        <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            title="Back to home"
            to={`/`}
          >
            {
              [
                <h3
                  style={{
                    fontFamily: `Montserrat, sans-serif`,
                    margin: 0,
                  }}
                >
                  {title}
                </h3>,
                <h4 style={{ marginTop: 10 }}>
                  {description}
                </h4>
            ]       
          } 
        </Link>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
