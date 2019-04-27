import { h, Component } from 'preact'
import WorkTextHeading from './WorkTextHeading/workTextHeading'
import WorkTextPara from './WorkTextPara/workTextPara'

class WorkTextContainer extends Component {
  render () {
    return (
      <div className='Work-text-container'>
        <WorkTextHeading />
        <WorkTextPara />
      </div>
    )
  }
}

export default WorkTextContainer
