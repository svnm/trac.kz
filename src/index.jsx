import Tracks from './containers/Tracks/Tracks.jsx'
import Track from './containers/Track/Track.jsx'
import {createRouter} from './Router.js'
import styles from './styles/base.css'
import normalize from './styles/normalize.css'
Object.assign(styles, normalize)

let routes = [
  { component: Tracks, path: '/'},
  { component: Track, path: '/tracks/:id' }
]

createRouter(document.getElementById('mount'), routes)
