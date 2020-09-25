import "assets/scss/material-kit-react.scss?v=1.4.0"
import { createMemoryHistory } from "history"
import React from "react"
import { Route, Router, Switch } from "react-router-dom"
import "typeface-roboto"
import "typeface-roboto-slab"
import AboutPage from "./AboutPage/AboutPage.jsx"
import MainPage from "./MainPage/MainPage.jsx"

let hist = createMemoryHistory()

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/" component={MainPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </Router>
)
