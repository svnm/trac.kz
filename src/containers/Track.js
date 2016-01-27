import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { fetchTrack } from '../actions/track'
import Loader from '../components/Loader'
import styles from './Track.css'

class Track extends Component {

  constructor (props) {
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  componentDidMount () {
    this.fetch(this.props.params.name)
  }

  fetch (name) {
    this.props.dispatch(fetchTrack(name))    
  }

  render () {

    const { track } = this.props
    let component = null
    let loader = <Loader />

    if(track === undefined || !Object.keys(track).length ){
      /* not loaded yet... */

    } else {
      /* loaded... */
      loader = null
      component = <span>{track.title}</span>

    }

    return (
      <div className={styles.track}>
        { loader }
        { component }
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
