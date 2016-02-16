import {element} from 'deku'
import {setRating} from '../../actions/card'
import styles from './Card.css'
import utils from '../../utils'

function render ({ props, children, context }) {

  const { title, artwork_url, id, permalink, user, path } = props

  return (
    <div id={'card' + path} class={styles.card}>
      <h3 class={styles.name}>{title}</h3>
    </div>
  )
}

function onCreate ({ props, dispatch }) { 
  /*const { rating, path } = props
  const percent = utils.toPercent(rating)
  requestAnimationFrame(mutate(path, percent, dispatch))*/
}

function mutate ( path, percent, dispatch) {
  return () => {
    setTimeout(() => {
      dispatch(setRating(path, percent))
    }, 200);
  }
}

export default {
  render,
  onCreate
}
