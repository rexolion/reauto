import { h, Component } from 'preact'
import HeroTextContainer from './HeroTextContainer/heroTextContainer';

class HeroText extends Component {
  render () {
    return (
      <div className='Hero-text'>
        <HeroTextContainer />
      </div>
    )
  }
}

export default HeroText
