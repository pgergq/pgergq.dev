/*eslint-disable*/
import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"

// React icons
import { FaGithub, FaTwitter } from "react-icons/fa"

import Button from "components/CustomButtons/Button.jsx"

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="tooltip-twitter"
          title="pgergq @ Twitter"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/pgergq"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaTwitter /> Twitter
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="tooltip-github"
          title="pgergq @ github"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/pgergq"
            target="_blank"
            className={classes.navLink}
          >
            <FaGithub /> GitHub
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
