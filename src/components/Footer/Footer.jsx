import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { withStyles } from "@material-ui/core"

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx"

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  const containerClasses = classNames(classes.container, classes.center)
  const blockClasses = classNames(classes.block, classes.inlineBlock)
  return (
    <footer className={footerClasses}>
      <div className={containerClasses}>
        &copy; {1900 + new Date().getYear()} by{" "}
        <a href="https://pgergq.dev" className={blockClasses}>
          [pgergq]
        </a>
        , made with{" "}
        <a href="https://www.gatsbyjs.com/" className={blockClasses}>
          Gatsby.js
        </a>{" "}
        and the{" "}
        <a
          href="https://www.gatsbyjs.com/starters/WebCu/gatsby-material-kit-react"
          className={blockClasses}
        >
          gatsby-material-kit-react
        </a>{" "}
        starter extension.
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
