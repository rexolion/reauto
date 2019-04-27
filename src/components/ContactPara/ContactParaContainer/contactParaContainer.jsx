import { h, Component } from 'preact'
import ContactParaHeading from './ContactParaHeading/contactParaHeading'
import ContactParaPara from './ContactParaPara/contactParaPara'

class ContactParaContainer extends Component {
  render () {
    return (
      <div className='ContactPara-container'>
        <ContactParaHeading />
        <ContactParaPara />
      </div>
    )
  }
}

export default ContactParaContainer
