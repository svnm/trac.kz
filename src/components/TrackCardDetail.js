import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './TrackCardDetail.css'
import grid from '../styles/grid.css'
Object.assign(styles, grid)

import Player from './Player'

class TrackCard extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    
    const { title, artwork_url, id, permalink, waveform_url } = this.props

    return (
      	<div styleName='trackCard grid'>
            <div styleName="col-1-2">
              <Link to={`/tracks/${id}/${permalink}`}>
                <h2 styleName='title'>{title}</h2>
              </Link>
            </div>
            <div styleName="col-1-2">
              <Player id={id} artwork_url={artwork_url} waveform_url={waveform_url} />              
            </div>
      	</div>
    )
  }

}

export default CSSModules(TrackCard, styles, {allowMultiple: true} )
