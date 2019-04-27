import { h, Component } from 'preact'
import HeroHeaderContainerItemContainer from './HeroHeaderContainerItemContainer/heroHeaderContainerItemContainer'

class HeroHeaderContainer extends Component {
  render () {
    return (
      <div className='Hero-header-container'>
        <div className='Hero-header-item Logo'>Reauto</div>
        <HeroHeaderContainerItemContainer />
      </div>
    )
  }
}

export default HeroHeaderContainer
