import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './Home.css'
import CSSModules from 'react-css-modules'

function Home({}) {
  return (
    <div styleName='home'>
      <img styleName='image' src='/public/img/purity-ring.jpg' />
    </div>
  );
};

export default connect(
  state => ({})
)(CSSModules(Home, styles));
