import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Footer.css'

import Player from './Player'

class Footer extends Component {

  render () {
    return (
    	<div styleName='footer'>
    		<h3 styleName='text'>isekivace.nz &nbsp;</h3>
    		<i styleName='icon' className='fa fa-soundcloud'></i>    		
    	</div>
    )
  }

}

export default CSSModules(Footer, styles, {allowMultiple: true} )