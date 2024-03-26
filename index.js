import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './src/style.css'
import Experience from './src/views/experience'
import Portfolio from './src/views/portfolio'
import Home from './src/views/home'
import NotFound from './src/views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Experience} exact path="/experience" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
