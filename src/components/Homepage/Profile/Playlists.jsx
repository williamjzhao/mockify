import React from 'react';
import classes from './Playlists.css';
const Playlists = (props) => {
  let ok = props.playlists;
  return (
    <div className={classes.Playlists}>
      {ok.map(playlist => (
          <div key={playlist[0]} className={classes.Playlist}>
              <img src={playlist[1]} alt="Playlist"></img>
              <a href='https://open.spotify.com/playlist/6yx09YedaDHh2Rm1y08LFC'>

              <div className={classes.Link}>
                  <strong>{playlist[0]}: </strong><span>{playlist[2]}</span>
              </div>
              </a>

          </div>
      ))}
    </div>
  )
}

export default Playlists;