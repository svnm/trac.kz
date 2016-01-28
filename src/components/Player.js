import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules';
import styles from './Player.css';

class Player extends Component {

  constructor (props) {
    super(props)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }

  componentDidMount() {
    this.play()
  }

  play () {
    let audioElement = ReactDOM.findDOMNode(this.refs.audio)
    audioElement.play();
  }

  pause () {
    let audioElement = ReactDOM.findDOMNode(this.refs.audio)
    audioElement.pause();    
  }

  render () {

    const { id, artwork_url, waveform_url } = this.props

    const clientId = 'c5a171200f3a0a73a523bba14a1e0a29'

    let streamUrl = 'https://api.soundcloud.com/tracks/' + id + '/stream?client_id=' + clientId
    let image = null
    let waveform = null

    image = (
      <img styleName='image' src={artwork_url || '/public/img/not-found.png'} />
    )

    waveform = (
        <img styleName='waveform' src={waveform_url} />      
    )

    return (
    	<div styleName='player'>
        { image }
        <audio id='audio' ref='audio' src={streamUrl}></audio>

        { waveform }

        <div styleName='icons'>
          <i styleName='icon' className='fa fa-2x fa-play' onClick={this.play}></i>
          <i styleName='icon' className='fa fa-2x fa-pause' onClick={this.pause}></i>
          <i styleName='icon' className='fa fa-2x fa-backward'></i>
          <i styleName='icon' className='fa fa-2x fa-forward'></i>
        </div>

    	</div>
    )
  }

}

export default CSSModules(Player, styles, {allowMultiple: true} )