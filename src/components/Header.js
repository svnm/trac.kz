import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import SC from 'soundcloud'
import { Link } from 'react-router'
import styles from './Header.css'
import grid from '../styles/grid.css'
Object.assign(styles, grid)

class Header extends Component {

  render () {

    return (
        <div styleName='header grid'>
        <Link to="/">
          <div styleName='title col-1-3'>
            <img styleName='logo' src='/public/img/trackz.png' />
            <h3 styleName='text'>trac.kz</h3>
          </div>
        </Link>
      </div>

    )
  }

}

export default CSSModules(Header, styles, {allowMultiple: true} )
