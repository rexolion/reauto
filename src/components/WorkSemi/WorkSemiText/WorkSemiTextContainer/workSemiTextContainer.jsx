import { h, Component } from 'preact'
import WorkSemiTextHeading from './WorkSemiTextHeading/workSemiTextHeading'
import WorkSemiTextPara from './WorkSemiTextPara/workSemiTextPara'

class WorkSemiTextContainer extends Component {
  render () {
    return (
      <div className='WorkSemi-text-container'>
        <WorkSemiTextHeading />
        <WorkSemiTextPara />
      </div>
    )
  }
}

export default WorkSemiTextContainer
