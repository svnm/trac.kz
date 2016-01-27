/*
import packages from './packages'

module.exports = { packages }
*/

const constants = require('../constants');

const initialState = {
  isFetching: false, 
  tracks: [],
  track: {}
}

function update(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_TRACK:
			console.log(action)
			return Object.assign({}, state, {
				track: action.json
			})

		case constants.RECEIVE_TRACKS:
			console.log(action)
			return Object.assign({}, state, {
				tracks: action.json.collection
			})

		default:
			return state
  }
}

module.exports = update
