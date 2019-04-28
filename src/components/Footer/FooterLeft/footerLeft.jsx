import { h, Component } from 'preact'
import FooterLeftContainer from './FooterLeftContainer/footerLeftContainer'

class FooterLeft extends Component {
  render () {
    return (
      <div className='Footer-left'>
        <FooterLeftContainer />
      </div>
    )
  }
}

export default FooterLeft
