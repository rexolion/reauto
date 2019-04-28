import { h, Component } from 'preact'
import FooterRightEmail from './FooterRightEmail/footerRightEmail'
import FooterRightSocial from './FooterRightSocial/footerRightSocial'

class FooterRightContainer extends Component {
  render () {
    return (
      <div className='Footer-right-container'>
        <FooterRightEmail />
        <FooterRightSocial />
      </div>
    )
  }
}

export default FooterRightContainer
