import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Home from 'pages/home'

export const ROUTES = {
  home: '/:pokemonType',
}

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/normal' />
      </Route>
      <Route path={ROUTES.home}>
        <Home />
      </Route>
    </Switch>
  </Router>
)

export default Routes
