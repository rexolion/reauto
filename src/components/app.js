import { h, Component } from 'preact'
import Hero from './Hero/hero'
import Divider from './Divider/divider'
import Work from './Work/work'
import WorkSemi from './WorkSemi/workSemi'
import ContactPara from './ContactPara/contactPara'
import Geo from './Geo/geo'
import Footer from './Footer/footer'

export default class App extends Component {
  render () {
    return (
      <div className='Container' >
        <Hero />
        <Divider size='md' />
        <Work />
        <WorkSemi />
        <ContactPara />
        <Geo />
        <Footer />
      </div>
    )
  }
}
