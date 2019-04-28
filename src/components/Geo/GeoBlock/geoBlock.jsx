import { h, Component } from 'preact'
import GeoBlockImage from './GeoBlockImage/geoBlockImage'
import GeoBlockHeading from './GeoBlockHeading/geoBlockHeading'

class GeoBlock extends Component {
  render () {
    return (
      <div className='Geo-block'>
        <GeoBlockImage />
        <GeoBlockHeading />
      </div>
    )
  }
}

export default GeoBlock
