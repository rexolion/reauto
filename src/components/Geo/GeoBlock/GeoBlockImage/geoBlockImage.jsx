import { h, Component } from 'preact'
import Image from 'pimg/preact'

class GeoBlockImage extends Component {
  render () {
    return (
      <div className='Geo-block-image'>
        <Image src='/assets/kansasMaps.png' />
      </div>
    )
  }
}

export default GeoBlockImage
