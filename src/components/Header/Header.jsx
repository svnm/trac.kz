import {element} from 'deku'
import {link} from '../../Router'
import styles from './Header.css'

/* 
  TODO: 
  The router should have the defined list of component names, 
  Should just need should send a component name to link
*/
import Tracks from '../../containers/Tracks/Tracks.jsx'

export default {

  render({context, dispatch}) {

    return (
      <div class={styles.header}>
        <a class={styles.button} onClick={() => dispatch(link('/', Tracks))}>ALL Tracks</a>
      </div>
    )
  }
}
