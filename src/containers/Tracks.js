import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchTracks } from '../actions/tracks'
import Loader from '../components/Loader'
import styles from './Tracks.css'

function Tracks({ npmPackages, fetchPackages }) {

  let packagesList = null 
  let loader = <Loader />

  if(npmPackages === undefined || !npmPackages.length){

    //fetchTracks()

  } else {

    /* npm packages have loaded... */
    loader = null

    /*
    packagesList = (
      npmPackages.map(function (p) { 
        return (
          <li key={p.id}>
            <Link to={`/package/${p.id}/${p.name}`}>
              <p className={styles.name}>{p.name}</p>
            </Link>
          </li>
        )
      })
    )
    */

  }

  return (
    <div className={styles.packages}>

      <div className={styles.row}>
        <h3 className={styles.title}>Select your react package...</h3>
      </div>

      { loader }

      <div className={styles.list}>
        <ul>      
          { packagesList }
        </ul>
      </div>

    </div>
  );
};

export default connect(
  state => ({ tracks: state.tracks }),
  { fetchTracks }
)(Tracks);
