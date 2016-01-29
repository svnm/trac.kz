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

        <div styleName='title col-2-3 mobile-col-2-3'>

          <Link to="/">
            <img styleName='logo grayscale' src='/public/img/trackz.png' />
          </Link>

          <Link to="/tracks">
            <h3 styleName='text'>trac.kz</h3>
          </Link>

        </div>

        <div styleName='soundcloud col-1-3 mobile-col-1-3'>
          <h3 styleName='text'>Sign in</h3>
        </div>

      </div>

    )
  }

}

export default CSSModules(Header, styles, {allowMultiple: true} )


/*
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
*/