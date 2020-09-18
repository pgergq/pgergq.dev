import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import { FaHome, FaIdCard } from "react-icons/fa"
import Button from "components/CustomButtons/Button.jsx"
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" href="/" className={classes.navLink}>
          <FaHome /> home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" href="/about" className={classes.navLink}>
          <FaIdCard /> about
        </Button>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
