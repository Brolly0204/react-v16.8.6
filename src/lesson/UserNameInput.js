import React from 'react'
import withLocal from './withLocal'
import withAjax from './withAjax'

class UserNameInput extends React.Component {
  static defaultProps = {
    value: 'hello'
  }
  // constructor() {
  //   super()
  //   this.state = { value: '' }
  // }

  // componentDidMount() {
  //   this.setState({ value: localStorage.getItem('username') })
  // }

  render() {
    return <div>
      <h3>userName： {this.props.value}</h3>
      <input type="text" defaultValue={this.props.value}/>
    </div>
  }
}


export default withLocal(withAjax(UserNameInput), 'user1')