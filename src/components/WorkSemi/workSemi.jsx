import { h, Component } from 'preact'
import WorkSemiImage from './WorkSemiImage/workSemiImage'
import WorkSemiText from './WorkSemiText/workSemiText'

class WorkSemi extends Component {
  render () {
    return (
      <div className='WorkSemi'>
        <WorkSemiImage />
        <WorkSemiText />
      </div>
    )
  }
}

export default WorkSemi
