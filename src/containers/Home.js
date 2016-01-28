import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './Home.css'

function Home({}) {

  return (
    <div className={styles.home}>
    </div>
  );
};

export default connect(
  state => ({})
)(Home);
