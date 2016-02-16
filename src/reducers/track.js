export default function(state = {}, action) {
  switch (action.type) {
    case 'RECIEVE_TRACK':
      return Object.assign({}, 
      	state,
      	action.json
      )
    default:
      return state;
  }
}
