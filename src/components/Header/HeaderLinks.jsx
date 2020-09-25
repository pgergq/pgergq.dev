import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import withStyles from "@material-ui/core/styles/withStyles"
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"
import Button from "components/CustomButtons/Button.jsx"
import React from "react"
import { FaHome, FaIdCard } from "react-icons/fa"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="/" className={classes.navLink} color="transparent">
          <FaHome /> home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/about" className={classes.navLink} color="transparent">
          <FaIdCard /> about
        </Button>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
