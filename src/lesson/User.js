import React from 'react'
import UserNameInput from './UserNameInput'
import UserEmailInput from './UserEmailInput'

class User extends React.Component {

  render() {
    return (
      <div>
        <UserNameInput/>
        <UserEmailInput/>
      </div>
    )
  }
}

export default User