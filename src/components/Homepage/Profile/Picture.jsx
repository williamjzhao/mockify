import React from 'react';
import classes from './Picture.css'
const Picture = (props) => {
  return(
    <div>
      <img 
        src={props.image} 
        alt="Profile"/>
    </div>
  )
}

export default Picture