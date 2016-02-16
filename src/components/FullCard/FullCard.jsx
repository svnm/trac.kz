import {element} from 'deku'
import {setRating} from '../../actions/card'
import styles from './FullCard.css'
import Review from '../Review/Review.jsx'

function render ({ props, children, context }) {

  const { title, artwork_url, id, permalink, waveform_url, user } = props

  return (
    <div id={'card' + path} class={styles.card}>
      <h3 class={styles.title}>{title}</h3>
    </div>
  )
}

function onCreate ({ props, dispatch }) { 
}

export default {
  render,
  onCreate
}
