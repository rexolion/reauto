import { h, Component } from 'preact'
import WorkTextContainer from './WorkTextContainer/workTextContainer'

class WorkText extends Component {
  render () {
    return (
      <div className='Work-text'>
        <WorkTextContainer />
      </div>
    )
  }
}

export default WorkText
