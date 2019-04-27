import { h, Component } from 'preact'
import Hero from './Hero/hero'


export default class App extends Component {
  render () {
    return (
      <div className='Container' >
        <Hero />
      </div>
    )
  }
}
