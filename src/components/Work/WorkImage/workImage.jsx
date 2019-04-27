import { h, Component } from 'preact'
import Image from 'pimg/preact'

class WorkImage extends Component {
  render () {
    return (
      <div className='Work-image'>
        <Image src='/assets/action-adult-auto-401800.jpg' />
      </div>
    )
  }
}

export default WorkImage
