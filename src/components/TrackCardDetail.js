import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import styles from './TrackCardDetail.css'
import grid from '../styles/grid.css'
Object.assign(styles, grid)

class TrackCard extends Component {


  componentDidMount() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);
    audioElement.play();
  }

  render () {

    const { title, artwork_url, id, permalink } = this.props

    return (
      	<div styleName='trackCard grid'>
            <div styleName="col-1-2">
              <Link to={`/tracks/${id}/${permalink}`}>
                <h2 styleName='title'>{title}</h2>
                <i styleName='icon' className='fa fa-play'></i>
                <i styleName='icon' className='fa fa-pause'></i>
                <i styleName='icon' className='fa fa-backward'></i>
                <i styleName='icon' className='fa fa-forward'></i>
              </Link>
            </div>
            <div styleName="col-1-2">
              <img styleName='image' src={artwork_url || 'not-found.jpg'} />
              <audio id='audio' ref='audio' src='https://api.soundcloud.com/tracks/187178269/stream?client_id=c5a171200f3a0a73a523bba14a1e0a29'></audio>
            </div>
      	</div>
    )
  }

}

export default CSSModules(TrackCard, styles, {allowMultiple: true} )
