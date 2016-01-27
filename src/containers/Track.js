import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTrack } from '../actions/track'
import styles from './Track.css'

import Loader from '../components/Loader'
import TrackCardDetail from '../components/TrackCardDetail'

class Track extends Component {

  constructor (props) {
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  componentDidMount () {
    this.fetch(this.props.params.id)
  }

  fetch (id) {
    this.props.dispatch(fetchTrack(id))    
  }

  render () {

    const { track } = this.props
    let trackCard = null
    let loader = <Loader />

    if(track === undefined || !Object.keys(track).length ){
      /* not loaded yet... */

    } else {
      /* loaded... */
      loader = null

      trackCard = (
        <TrackCardDetail {...track} />
      )

    }

    return (
      <div className={styles.track}>
        { loader }
        { trackCard }
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { 
    track: state.trackz.track, 
  }
}

export default connect(mapStateToProps)(Track)
