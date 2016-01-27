import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'
import SC from 'soundcloud'

function Header() {

  loginUser()

  return (
    <header>
      <div className={styles.header}>

		<div className={styles.title}>
			<h3>trac.kz</h3>
		</div>
    <div className={styles.soundcloud}>
      <h3>Sign in</h3>
    </div>

        <Link className={styles.tab} to="/">Home </Link>
        <Link className={styles.tab} to="/tracks">Trackz </Link>

      </div>
    </header>
  )
}

export default Header

function loginUser(shouldShowStream = true) {
    return dispatch => {
        SC.initialize({
            client_id: CLIENT_ID,
            redirect_uri: `${window.location.protocol} //${window.location.host}/api/callback`
        });

        SC.connect().then(authObj => {
            Cookies.set(COOKIE_PATH, authObj.oauth_token);
            dispatch(authUser(authObj.oauth_token, shouldShowStream));
            SC.stream('/tracks/293').then(function(player){
              player.play();
            });
        })
        .catch(err => { throw err; });
    };
}
