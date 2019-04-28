import { h, Component } from 'preact'
import FooterLeft from './FooterLeft/footerLeft'
import FooterRight from './FooterRight/footerRight'

class Footer extends Component {
  render () {
    return (
      <div className='Footer'>
        <FooterLeft />
        <FooterRight />
      </div>
    )
  }
}

export default Footer
