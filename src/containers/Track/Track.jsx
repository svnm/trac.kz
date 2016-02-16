import {element} from 'deku'
import {fetchTrack} from '../../actions/track'
import {getPathName} from '../../Router'
import utils from '../../utils'
import FullCard from '../../components/FullCard/FullCard.jsx'
import Header from '../../components/Header/Header.jsx'
import Loader from '../../components/Loader/Loader.jsx'

export default {

  onCreate ({ props, path, dispatch}) {
    dispatch(fetchTrack(location.pathname))
    console.log(props.params)
  },

  render({context, dispatch}) {

    /*
      TODO: location.pathname is being stored in router, but is not really used.
      Also when changing from one route to another the component should change to loader, 
      This should hopefully work well if the pathname was correctly used from context.router
    */

    let component = null

    if(utils.isEmpty(context.track)){
      component = (<Loader />)
    } else {

      /* results loaded */
      component = (
        <FullCard {...context.track} path='fullCard' />
      )
    }

    return (
      <div>
        <Header />
        {component}
      </div>
    )
  }
}
