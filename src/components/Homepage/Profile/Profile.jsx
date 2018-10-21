import React, { Component } from 'react';
import Picture from './Picture';
import Playlists from './Playlists';
import classes from './Profile.css';

class Profile extends Component {
  render() {
    const imageLink = 'https://mosaic.scdn.co/640/1cd723595cfd4dd9375cfdf980b1b9b0134913eb84758feb8ec5ddb4f2c162f2fc539c80ae705e3edf706b5db2af83284fcd8840521967b90767eb66f0abb52afc4887ae155e29019bd1370c912115b5';
    // const desc = 'https://open.spotify.com/playlist/6yx09YedaDHh2Rm1y08LFC';
    const desc = "A musical journey through music";
    let playlist = [
      ['The Experience', 'https://mosaic.scdn.co/640/1cd723595cfd4dd9375cfdf980b1b9b0134913eb84758feb8ec5ddb4f2c162f2fc539c80ae705e3edf706b5db2af83284fcd8840521967b90767eb66f0abb52afc4887ae155e29019bd1370c912115b5', desc],
      ['The Mock', imageLink, desc],
      ['The Mock Revival', imageLink, desc],
      ['The Mock III', imageLink, desc],
      ['The Mock VI', imageLink, desc],
      ['King Mocka', imageLink, desc],
    ]
    
    return(
      <div className={classes.Profile}>
        <div className={classes.inputCont}>
          <input type="text" placeholder="Search for a playlist or song..."></input>
        </div>
        <Playlists 
          playlists={playlist}/>
      </div>
    )
  }
}

export default Profile;