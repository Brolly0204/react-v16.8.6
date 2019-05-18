import React from 'react'

export default (ChildComponent, key) => {
  return class extends React.Component {
    constructor() {
      super()
      this.state = {
        value: ''
      }
    }
    componentDidMount() {
      this.setState({ value: localStorage.getItem(key)})
    }

    render() {
      return <ChildComponent {...this.props} value={this.state.value} />
    }
  }
}