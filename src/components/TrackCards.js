import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './TrackCards.css'
import grid from '../styles/grid.css'
Object.assign(styles, grid)

import TrackCard from '../components/TrackCard'

class TrackCards extends Component {

  render () {

  	let cards = null

    const { tracks } = this.props

    cards = tracks.map(function (t, i) {
      return (
        <div styleName='trackCard col-1-3 mobile-col-1-1'>
          <TrackCard {...t} key={i} />
        </div>
      )
    })

    return (
      	<div styleName='trackCards grid'>
      		{cards}
      	</div>
    )
  }

}

export default CSSModules(TrackCards, styles, {allowMultiple: true} )
