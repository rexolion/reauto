import { h, Component } from 'preact'
import HeroTextHeading from './HeroTextHeading/heroTextHeading'
import HeroTextSubHead from './HeroTextSubHead/heroTextSubHead'
import HeroTextButton from './HeroTextButton/heroTextButton'

class HeroTextContainer extends Component {
  render () {
    return (
      <div className='Hero-text-container'>
        <HeroTextHeading />
        <HeroTextSubHead />
        <HeroTextButton />
      </div>
    )
  }
}

export default HeroTextContainer
