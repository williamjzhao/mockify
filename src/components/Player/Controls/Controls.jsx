import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Controls.css';

export const Controls = (props) => {
  return(
    <div className={classes.Controls}>
      <div className={classes.Group}>
        <FontAwesomeIcon className={classes.icons} icon="fast-backward" />
        <FontAwesomeIcon onClick={props.backward} className={classes.icons} icon="backward" />
        <FontAwesomeIcon onClick={props.click} className={classes.icons} icon={props.newIcon} />
        <FontAwesomeIcon onClick={props.forward} className={classes.icons} icon="forward" />
        <FontAwesomeIcon className={classes.icons} icon="fast-forward" />
      </div>
    </div>
  )
}

export default Controls