import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTracks } from '../actions/tracks'
import styles from './Tracks.css'

import Loader from '../components/Loader'
import TrackCards from '../components/TrackCards'

class Tracks extends Component {

  constructor (props) {
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  componentDidMount () {
    this.fetch(this.props.params.name)
  }

  fetch (name) {
    this.props.dispatch(fetchTracks(name))    
  }

  render () {

    let component = null
    let loader = <Loader />
    let trackCards = null
    
    const { tracks } = this.props

    if(tracks === undefined || !Object.keys(tracks).length ){
      /* not loaded yet... */

    } else {
      /* loaded... */
      loader = null

      trackCards = (
        <TrackCards {...this.props} />
      )

    }

    return (
      <div className={styles.tracks}>
        { loader }
        { trackCards }
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { 
    tracks: state.trackz.tracks, 
  }
}

export default connect(mapStateToProps)(Tracks)
