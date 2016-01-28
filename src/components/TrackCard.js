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
      	<div styleName='trackCard'>
            <Link to={`/tracks/${id}/${permalink}`}>
              <h2 styleName='title'>{title}</h2>
            </Link>
            <img styleName='image' src={artwork_url || '/public/img/not-found.png'} />
      	</div>
    )
  }

}

export default CSSModules(TrackCard, styles, {allowMultiple: true} )
