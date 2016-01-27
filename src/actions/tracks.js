/*
id
c5a171200f3a0a73a523bba14a1e0a29
secret
4a1a341272a2a78a8c8a4e986f06bcbc
*/

import fetch from 'isomorphic-fetch'
const constants = require('../constants');

function fetchTracks(name) {
  return dispatch => {
    return fetch('http://api.soundcloud.com/tracks/13158665?client_id=c5a171200f3a0a73a523bba14a1e0a29')
      .then(req => req.json())
      .then(json => dispatch(receiveTracks(json)))
  }
}

function receiveTracks(json) {
  return {
    type: constants.RECEIVE_TRACKS,
    json: json,
    receivedAt: Date.now()
  }
}

module.exports = { fetchTracks, receiveTracks };
