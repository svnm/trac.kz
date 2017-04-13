import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'

import styles from './TrackCard.css'
import grid from '../styles/grid.css'
Object.assign(styles, grid)

@CSSModules(styles, { allowMultiple: true })
export default class TrackCard extends Component {
  render () {
    const { title, artwork_url, id, permalink, user } = this.props

    let trimmed = title.substr(0, 40)
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
