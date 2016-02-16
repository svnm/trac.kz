import * as types from '../constants'
import fetch from 'isomorphic-fetch'

export function fetchTracks() {
  return dispatch => {
    return fetch('//api.soundcloud.com/tracks?linked_partitioning=1&client_id=c5a171200f3a0a73a523bba14a1e0a29&limit=50&offset=0&q=pcmusic')
      .then(req => req.json())
      .then(json => dispatch(receiveTracks(json)))
  }
}

export function receiveTracks(json) {
  return {
    type: types.RECEIVE_TRACKS,
    json: json,
    receivedAt: Date.now()
  }
}
