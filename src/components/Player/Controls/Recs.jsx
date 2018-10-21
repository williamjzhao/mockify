import React from 'react';
import classes from './Recs.css';
const Recs = (props) => {
  let albumRecs = props.recs;
  return(
    <div className={classes.Recs}>
      {albumRecs.map(album => (
        <div>
          <img src={album}/>
        </div>
      ))}
    </div>
  )
}

export default Recs;