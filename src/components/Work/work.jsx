import { h, Component } from 'preact'
import WorkText from './WorkText/workText'
import WorkImage from './WorkImage/workImage'

class Work extends Component {
  render () {
    return (
      <div className='Work'>
        <WorkText />
        <WorkImage />
      </div>
    )
  }
}

export default Work
