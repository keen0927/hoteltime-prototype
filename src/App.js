import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import './styles/main.scss';

import Home from './pages/Home';
import SearchHome from './pages/SearchHome';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={SearchHome} />
        </Switch>
      </div>
    )
  }
}

export default App;