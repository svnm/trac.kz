export default function(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_TRACKS':
      return Object.assign({}, 
      	state, 
      	{ results: action.json.collection }
      )
    default:
      return state;
  }
}
