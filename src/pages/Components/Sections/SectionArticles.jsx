import withStyles from "@material-ui/core/styles/withStyles"
import articleCardStyle from "assets/jss/material-kit-react/components/articleCardStyle.jsx"
import classNames from "classnames"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardFooter from "components/Card/CardFooter.jsx"
import CardHeader from "components/Card/CardHeader.jsx"
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import { Link } from "gatsby"
import React from "react"
import { FaArrowCircleRight } from "react-icons/fa"

class SectionArticles extends React.Component {
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
    const { classes, articles } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )

    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          {articles.map((article, _index) => {
            return (
              <GridItem xs={12} sm={12} md={6}>
                <Card
                  className={classNames(
                    classes[this.state.cardAnimaton],
                    classes.profile
                  )}
                >
                  <CardHeader color="primary">
                    <h4 className={classes.title}>{article.header}</h4>
                  </CardHeader>
                  <CardBody className={classes.profile}>
                    {article.body}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Link to={article.link}>
                      <Button color="primary" size="sm" round>
                        <FaArrowCircleRight />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </GridItem>
            )
          })}
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(articleCardStyle)(SectionArticles)
