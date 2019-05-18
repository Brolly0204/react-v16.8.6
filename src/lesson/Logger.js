import React from 'react'

export default (ChildComponent) => {
  return class extends React.Component {
    componentWillMount() {
      console.log(`will ${new Date().toTimeString()}`)
    }

    componentDidMount() {
      console.log(`Did ${new Date().toTimeString()}`)
    }
    render() {
      return <ChildComponent {...this.props}/>
    }
  }
}