import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './TrackCard.css'
import grid from '../styles/grid.css'
Object.assign(styles, grid)

class TrackCard extends Component {

  render () {

    const { title, artwork_url, id, permalink } = this.props

    return (
      	<div styleName='trackCard grid'>
            <div styleName="col-1-4">
              <Link to={`/tracks/${id}/${permalink}`}>
              {title}
              </Link>
            </div>
            <div styleName="col-1-4">
              <img styleName='image' src={artwork_url || 'not-found.jpg'} />
            </div>
            <div styleName="col-1-4">
            </div>
            <div styleName="col-1-4">
            </div>
      	</div>
    )
  }

}

export default CSSModules(TrackCard, styles, {allowMultiple: true} )
