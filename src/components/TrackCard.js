import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './TrackCard.css'
import grid from '../styles/grid.css'
Object.assign(styles, grid)

class TrackCard extends Component {

  render () {

    const { title, artwork_url, id, permalink, user } = this.props

    let trimmed = title.substr(0, 40)

    //re-trim if in the middle of a word
    trimmed = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(' ')))
    trimmed += '...'

    return (
      	<div styleName='trackCard'>
            <img styleName='avatar grayscale' src={user.avatar_url || '/public/img/not-found.png'} />
            <Link to={`/tracks/${id}/${permalink}`}>
              <h2 styleName='title'>{trimmed}</h2>
              <img styleName='image' src={artwork_url || '/public/img/not-found.png'} />
            </Link>
            
      	</div>
    )
  }

}

export default CSSModules(TrackCard, styles, {allowMultiple: true} )
