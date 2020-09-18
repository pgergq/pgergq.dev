import withStyles from "@material-ui/core/styles/withStyles"
import profile from "assets/img/faces/gergely.jpeg"
import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPage.jsx"
import classNames from "classnames"
import Button from "components/CustomButtons/Button.jsx"
import Footer from "components/Footer/Footer.jsx"
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )

    return (
      <div>
        <Header
          brand="[pgergq]"
          color="transparent"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <div className={classes.profile}>
                <div>
                  <img src={profile} alt="me" className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>gergely petrik</h3>
                  <h6>software engineer</h6>
                  <br />
                </div>
                <p>
                  language-obsessed software developer from Hungary. <br />
                  collector of LEGO&reg; Star Wars&trade; mini figures.
                </p>
                <br />
                <Button
                  color="transparent"
                  href="https://github.com/pgergq"
                  target="_blank"
                  className={classes.navLink}
                >
                  <FaGithub /> GitHub
                </Button>
                <Button
                  color="transparent"
                  href="https://www.linkedin.com/in/pgergq"
                  target="_blank"
                  className={classes.navLink}
                >
                  <FaLinkedin /> Linkedin
                </Button>
                <Button
                  href="https://twitter.com/pgergq"
                  target="_blank"
                  color="transparent"
                  className={classes.navLink}
                >
                  <FaTwitter /> Twitter
                </Button>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(aboutPageStyle)(AboutPage)
