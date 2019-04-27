import { h, Component } from 'preact'
import Image from 'pimg/preact'

class HeroImage extends Component {
  render () {
    return (
      <div className='Hero-image'>
        <Image src='/assets/black-and-white-car-classic-474.jpg' alt='Black and white image of repair a car' />
      </div>
    )
  }
}

export default HeroImage
