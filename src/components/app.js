import { h, Component } from 'preact'
import Hero from './Hero/hero'
import Divider from './Divider/divider'
import Work from './Work/work'
import WorkSemi from './WorkSemi/workSemi'
import ContactPara from './ContactPara/contactPara'

export default class App extends Component {
  render () {
    return (
      <div className='Container' >
        <Hero />
        <Divider size='md' />
        <Work />
        <WorkSemi />
        <ContactPara />
      </div>
    )
  }
}
