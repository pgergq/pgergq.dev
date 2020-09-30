import withStyles from "@material-ui/core/styles/withStyles"
import image from "assets/img/profile-bg.jpg"
import mainPageStyle from "assets/jss/material-kit-react/views/mainPage.jsx"
import classNames from "classnames"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import React from "react"
import SectionArticles from "../Components/Sections/SectionArticles.jsx"

class MainPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )

    return (
      <div>
        <div
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            paddingBottom: "30px",
          }}
        >
          <Header
            brand="[pgergq]"
            color="transparent"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 400,
              color: "white",
            }}
            {...rest}
          />
          <div className={classes.pageHeader}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>hey, i'm gergely.</h1>
                  <h4 className={classes.subtitle}>
                    this is my personal website of many things.
                  </h4>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <SectionArticles
                headerContents="header contents"
                articles={[
                  { header: "about", body: "first body", link: "/about" },
                  { header: "about", body: "first body", link: "/about" },
                  { header: "about", body: "first body", link: "/about" },
                  { header: "about", body: "first body", link: "/about" },
                  { header: "error", body: "second body", link: "/404" },
                ]}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(mainPageStyle)(MainPage)
