import { h, Component } from 'preact'
import FooterLeftHeading from './FooterLeftHeading/footerLeftHeading'
import FooterLeftPara from './FooterLeftPara/footerLeftPara'
import FooterLeftCopy from './FooterLeftCopy/footerLeftCopy'

class FooterLeftContainer extends Component {
  render () {
    return (
      <div className='Footer-left-container'>
        <FooterLeftHeading />
        <FooterLeftCopy />
        <FooterLeftPara />
      </div>
    )
  }
}

export default FooterLeftContainer
