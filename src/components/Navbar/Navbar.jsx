import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.css';

const Navbar = () => (
  <div className={classes.NavBar}>
    <NavLink style={{ textDecoration: 'none' }} to=''><span>Mockify</span></NavLink>
    <NavLink style={{ textDecoration: 'none' }} to='/'>Home</NavLink>
    <NavLink style={{ textDecoration: 'none' }} to='/player'>Player</NavLink>
    <div className={classes.General}>
      <div className={classes.Info}>
        <span><strong>wzhao2017</strong></span>
        <span>Followers: 23</span>
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg"/>
      </div>
    </div>
  </div>
);

export default Navbar