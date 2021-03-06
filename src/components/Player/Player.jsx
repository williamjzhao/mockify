import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faFastBackward, faForward, faFastForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import Controls from './Controls/Controls';
import Album from './Controls/Album';
import classes from './Player.css';
import Horizontal from './Controls/Horizontal';
import Recs from './Controls/Recs';

library.add(faBackward)
library.add(faFastBackward)
library.add(faForward)
library.add(faFastForward)
library.add(faPause)
library.add(faPlay)

const iLink1 = 'https://www.clashmusic.com/sites/default/files/styles/article_feature/public/field/image/glass-animals-how-to.jpg?itok=bPyqtIDd';
const iLink2 = 'https://thefader-res.cloudinary.com/private_images/w_1800,c_limit,f_auto,q_auto:best/Demr_PbV4AAnt-U_tk8kio/kanye-west-ye-album-credits.jpg';
const iLink3 = 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b8/3b/3f/b83b3fcf-b713-9995-293e-27fbf5f8d398/source/1200x1200bb.jpg';

let albums = [iLink1,iLink2,iLink3];
let names = ['Other Side of Paradise', 'Ghost Town', 'Summertime Sadness'];
let bands = ['Glass Animals', 'Kayne West', 'Childish Gambino'];

let recs = ['https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Cloud_Nine_coverartwork.jpg/220px-Cloud_Nine_coverartwork.jpg',
              'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Americanteen.jpg/220px-Americanteen.jpg',
            'http://spillmagazine.com/wp-content/uploads/2017/01/Colony-House.jpg',
            'https://upload.wikimedia.org/wikipedia/en/7/7a/Minutes_to_Midnight_cover.jpg','https://is2-ssl.mzstatic.com/image/thumb/Music20/v4/81/a4/33/81a433bf-92a6-c0ae-c5c8-449caa6f3370/075679911964.jpg/268x0w.jpg',
            'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Cloud_Nine_coverartwork.jpg/220px-Cloud_Nine_coverartwork.jpg',
              'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Americanteen.jpg/220px-Americanteen.jpg',
            'http://spillmagazine.com/wp-content/uploads/2017/01/Colony-House.jpg',
            'https://upload.wikimedia.org/wikipedia/en/7/7a/Minutes_to_Midnight_cover.jpg','https://is2-ssl.mzstatic.com/image/thumb/Music20/v4/81/a4/33/81a433bf-92a6-c0ae-c5c8-449caa6f3370/075679911964.jpg/268x0w.jpg','https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Cloud_Nine_coverartwork.jpg/220px-Cloud_Nine_coverartwork.jpg',
            'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Americanteen.jpg/220px-Americanteen.jpg',
          'http://spillmagazine.com/wp-content/uploads/2017/01/Colony-House.jpg',
          'https://upload.wikimedia.org/wikipedia/en/7/7a/Minutes_to_Midnight_cover.jpg','https://is2-ssl.mzstatic.com/image/thumb/Music20/v4/81/a4/33/81a433bf-92a6-c0ae-c5c8-449caa6f3370/075679911964.jpg/268x0w.jpg','https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Cloud_Nine_coverartwork.jpg/220px-Cloud_Nine_coverartwork.jpg',
          'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Americanteen.jpg/220px-Americanteen.jpg',
        'http://spillmagazine.com/wp-content/uploads/2017/01/Colony-House.jpg',
        'https://upload.wikimedia.org/wikipedia/en/7/7a/Minutes_to_Midnight_cover.jpg','https://is2-ssl.mzstatic.com/image/thumb/Music20/v4/81/a4/33/81a433bf-92a6-c0ae-c5c8-449caa6f3370/075679911964.jpg/268x0w.jpg','https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Cloud_Nine_coverartwork.jpg/220px-Cloud_Nine_coverartwork.jpg',
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Americanteen.jpg/220px-Americanteen.jpg',
      'http://spillmagazine.com/wp-content/uploads/2017/01/Colony-House.jpg',
      'https://upload.wikimedia.org/wikipedia/en/7/7a/Minutes_to_Midnight_cover.jpg','https://is2-ssl.mzstatic.com/image/thumb/Music20/v4/81/a4/33/81a433bf-92a6-c0ae-c5c8-449caa6f3370/075679911964.jpg/268x0w.jpg'];
class Player extends Component {
  state = {
    playing: false,
    icon: 'play',
    album: albums,
    name: names,
    band: bands,
    pos: 0
  }

  handleChange = value => {
    this.setState({
      volume: value
    })
  }

  handleForward = () => {
    if(this.state.pos === 2) {
      this.setState({
        pos: 0
      })
    } else{
      const temp = this.state.pos + 1;
      this.setState({
        pos: temp
      })
    }
  }

  handleBackward = () => {
    if(this.state.pos === 0) {
      this.setState({
        pos: 2
      })
    } else{
      const temp = this.state.pos - 1;
      this.setState({
        pos: temp
      })
    }
  }

  render() {
    const change = () => {
      let temp = this.state.playing;
      let nIcon;
      if(this.state.icon === 'play') {
        nIcon = 'pause';
      } else {
        nIcon = 'play';
      }
      this.setState({
        playing: !temp,
        icon: nIcon
      })
    }

    return(
      <div>
        <Navbar />
        <div className={classes.Player}>
          <div className={classes.Album}>
            <Album art={this.state.album[this.state.pos]}/>
            <h2>{this.state.name[this.state.pos]}</h2>
            <h3>{this.state.band[this.state.pos]}</h3>
          </div>
          <div className={classes.Controls}>
            <Controls
              click={change} 
              forward={this.handleForward}
              backward={this.handleBackward}
              newIcon={this.state.icon}/>
          </div>
          <div className={classes.Recs}>
            <Recs recs={recs}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Player;