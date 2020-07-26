import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/home'

export const ROUTES = {
  home: '/:pokemonType',
}

const Routes = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.home}>
        <Home />
      </Route>
    </Switch>
  </Router>
)

export default Routes
