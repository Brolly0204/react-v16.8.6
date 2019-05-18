import React from 'react'
import PropTypes from 'prop-types'

class Props extends React.Component {
  static propTypes = {
    // age: PropTypes.number.isRequired
    age(props, propName, componentName) {
      if (props[propName] > 18) {
        return new Error("you too aged")
      }
    }
  }

  render() {
    return <h3>age: {this.props.age}</h3>
  }
}

export default Props