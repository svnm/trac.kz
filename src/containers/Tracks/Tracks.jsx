import {element} from 'deku'
import {fetchTracks} from '../../actions/tracks'
import utils from '../../utils'
import Card from '../../components/Card/Card.jsx'
import Header from '../../components/Header/Header.jsx'
import Track from '../../containers/Track/Track.jsx'
import Loader from '../../components/Loader/Loader.jsx'
import {getPathName} from '../../Router'
import {link} from '../../Router'

export default {

  onCreate ({ path, dispatch }) {
    console.log(path)
    dispatch(fetchTracks())
  },

  render({context, dispatch}) {

    let component = null

    if(utils.isEmpty(context.tracks.results)){
      component = (<Loader />)
    } else {
      /* results loaded */
      component = context.tracks.results.map((t, i) => (
        <a onClick={() => dispatch(link('/1', Track ))} >
          <Card key={i} {...t} path={i} />
        </a>
      ))
    }

    return (
      <div>
        <Header />
        {component}
      </div>
    )
  }
}
