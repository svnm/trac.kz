import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './Home.css'

function Home({}) {

  return (
    <div className={styles.home}>
      <p className={styles.description}>
      <Link to='/tracks/333/cooltrack'>trackz...</Link>
      </p>
    </div>
  );
};

export default connect(
  state => ({})
)(Home);
