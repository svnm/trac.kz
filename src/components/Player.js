import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules';

import styles from './Player.css';
import Player from 'react-soundcloud-player'

@CSSModules(styles, { allowMultiple: true })
export default class extends Component {
  render () {
    const { id, artwork_url, waveform_url } = this.props
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
        <Player audio_id={id} title='' />
    	</div>
    )
  }
}
