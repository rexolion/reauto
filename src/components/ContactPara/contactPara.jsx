import { h, Component } from 'preact'
import ContactParaContainer from './ContactParaContainer/contactParaContainer'

class ContactPara extends Component {
  render () {
    return (
      <div className='ContactPara'>
        <ContactParaContainer />
      </div>
    )
  }
}

export default ContactPara
