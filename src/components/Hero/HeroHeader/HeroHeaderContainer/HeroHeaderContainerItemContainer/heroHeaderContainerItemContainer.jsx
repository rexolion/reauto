import { h, Component } from 'preact'

class HeroHeaderContainerItemContainer extends Component {
  render () {
    return (
      <div className='Hero-header-item-container'>
        <div className='Hero-header-item'>Home</div>
        <div className='Hero-header-item'>Works</div>
        <div className='Hero-header-item'>Contact</div>
        <div className='Hero-header-item'>Location</div>
      </div>
    )
  }
}

export default HeroHeaderContainerItemContainer
