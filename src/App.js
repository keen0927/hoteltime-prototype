import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import './styles/main.scss';

import Home from './pages/Home';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App;