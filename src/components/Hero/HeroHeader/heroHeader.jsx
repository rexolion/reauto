import { h, Component } from 'preact'
import HeroHeaderContainer from './HeroHeaderContainer/heroHeaderContainer';

class HeroHeader extends Component {
  render () {
    return (
      <header className='Hero-header'>
        <HeroHeaderContainer />
      </header>
    )
  }
}

export default HeroHeader
