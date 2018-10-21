import React, { Component } from 'react'
import Slider from 'react-rangeslider';
import classes from './Horizontal.css';
class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 10
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (
      <div className={classes.rangeslider}>
        <Slider
          min={0}
          max={100}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Horizontal