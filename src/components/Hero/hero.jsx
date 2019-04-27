import { h, Component } from 'preact'
import HeroHeader from './HeroHeader/heroHeader'
import HeroText from './HeroText/heroText'
import HeroImage from './HeroImage/heroImage'

class Hero extends Component {
  render () {
    return (
      <div class='Hero'>
        <HeroImage />
        <HeroHeader />
        <HeroText />
      </div>
    )
  }
}

export default Hero
