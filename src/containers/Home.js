import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './Home.css'
import CSSModules from 'react-css-modules'

function Home({}) {
  return (
    <div styleName='home'>
      <Link to={`/artists/ladytron`}>
        <img styleName='image' src='/public/img/ladytron.jpg' />
      </Link>
      <Link to={`/artists/islamiq-grrrls`}>
        <img styleName='image' src='/public/img/islamiq-grrrls.jpg' />
      </Link>
      <Link to={`/artists/hannah-diamond`}>
        <img styleName='image' src='/public/img/hannah-diamond.jpg' />
      </Link>
      <Link to={`/artists/ritualz`}>
        <img styleName='image' src='/public/img/salem.jpg' />
      </Link>
      <Link to={`/artists/my-tigress-mistress`}>
        <img styleName='image' src='/public/img/my-tigress-mistress.jpg' />
      </Link>
    </div>
  );
};

export default connect(
  state => ({})
)(CSSModules(Home, styles));
