import withStyles from "@material-ui/core/styles/withStyles"
import profile from "assets/img/faces/gergely.jpeg"
import image from "assets/img/profile-bg.jpg"
import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPage.jsx"
import classNames from "classnames"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardFooter from "components/Card/CardFooter.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import { default as React } from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
    }
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" })
      }.bind(this),
      700
    )
  }
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
        {/* <Parallax small filter image={require("assets/img/profile-bg.jpg")} /> */}
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <Card
                  className={classNames(
                    classes[this.state.cardAnimaton],
                    classes.profile
                  )}
                >
                  <div>
                    <img src={profile} alt="me" className={imageClasses} />
                  </div>
                  <CardBody className={classes.profile}>
                    <div className={classes.name}>
                      <h3 className={classes.title}>gergely petrik</h3>
                      <h6>software engineer</h6>
                      <br />
                    </div>
                    <p>
                      language-obsessed software developer from Hungary. <br />
                      collector of LEGO&reg; Star Wars&trade; mini figures.
                    </p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
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
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(aboutPageStyle)(AboutPage)
