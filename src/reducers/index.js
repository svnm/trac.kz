import {combineReducers} from 'redux'
import tracks from './tracks'
import track from './track'
import router from './router'

const rootReducer = combineReducers({
  tracks,
  track,
  router
})

export default rootReducer
