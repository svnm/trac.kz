import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { fetchTracks } from '../actions/tracks'
import styles from './ArtistPage.css'
import TrackCards from '../components/TrackCards'

class ArtistPage extends Component {
  constructor (props) {
    super(props)
    this.fetch = this.fetch.bind(this)
    this.state = {
      tracks: []
    }
  }

  componentDidMount () {
    this.fetch(this.props.params.name)
  }

  fetch (name = 'ladytron') {
    this.props.dispatch(fetchTracks(name))
  }

  render () {
    let component = null
    let trackCards = null

    const { tracks } = this.props

    if(tracks === undefined || !Object.keys(tracks).length ){
      /* not loaded yet... */
    } else {
      /* loaded... */
      trackCards = (
        <TrackCards {...this.props} />
      )
    }

    return (
      <ReactCSSTransitionGroup
        className={styles.artists}
        component='div'
        transitionName='example'
        transitionAppear={true} >
        { trackCards }
      </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    tracks: state.trackz.tracks,
  }
}

export default connect(mapStateToProps)(ArtistPage)
