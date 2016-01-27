import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Footer.css';

class Footer extends Component {

  render () {
    return (
    	<div styleName='footer'>
    		<span>isekivace.nz</span>
    	</div>
    )
  }

  constructor (props) {
    super(props)
  }
}

export default CSSModules(Footer, styles, {allowMultiple: true} )