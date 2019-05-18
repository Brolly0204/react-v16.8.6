import React from 'react'

export default (ChildComponent) => {
  return class extends React.Component {
    constructor() {
      super()
      this.state = {
        value: ''
      }
    }

    componentDidMount() {
      fetch('./user.json').then(res => res.json()).then(data => {
        this.setState({value: data[this.props.value]})
      })
    }

    render() {
      return <ChildComponent {...this.props} value={this.state.value}/>
    }
  }
}