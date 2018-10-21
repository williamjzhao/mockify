import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { NavLink, Switch, Route, hashHistory, IndexRoute} from 'react-router-dom';
import classes from './Homepage.css';
import Profile from './Profile/Profile';


class Homepage extends Component {
  render() {
    return (
      <div className={classes.HomePage}>
        <Navbar />
        <div className={classes.Main}>
          <Profile />
        </div>
      </div>
    )
  }
}



export default Homepage