import { h, Component } from 'preact'

class Divider extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div class={`Divider_${this.props.size}`} />
    )
  }
}

export default Divider
