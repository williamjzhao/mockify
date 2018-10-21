import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Player from './components/Player/Player';
import Homepage from './components/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}

const Main = () => (
  <Switch>
    <Route exact path='/' component={Homepage}></Route>
    <Route exact path='/player' component={Player}></Route>
  </Switch>
);

export default App;
