import withStyles from "@material-ui/core/styles/withStyles"
import errorPageStyle from "assets/jss/material-kit-react/views/errorPage.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import React from "react"
import { FaExclamationTriangle } from "react-icons/fa"

const dashboardRoutes = []

class ErrorPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          color="danger"
          routes={dashboardRoutes}
          brand="[pgergq]"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>
                  <FaExclamationTriangle /> Uh-oh
                </h1>
                <h4 className={classes.subtitle}>Something has gone wrong.</h4>
                <h5 className={classes.subtitle}>Please try again later.</h5>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <Footer />
      </div>
    )
  }
}

export default withStyles(errorPageStyle)(ErrorPage)
