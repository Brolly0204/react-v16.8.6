import React from 'react'
import withLocal from './withLocal';
import withAjax from './withAjax'

class UserEmailInput extends React.Component {

  render() {
    return <div>
    <h3>userEmail</h3>
    <input type="text" defaultValue={this.props.value}/>
    </div>
  }
}

export default withLocal(withAjax(UserEmailInput), 'user2')