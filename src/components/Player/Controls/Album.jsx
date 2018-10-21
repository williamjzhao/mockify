import React, {Fragment} from 'react';
import classes from './Album.css';
const Album = (props) => {
  return(
    <div className={classes.Album}>
      <img src={props.art}></img>
    </div>
  )
}

export default Album