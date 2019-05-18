import React, { Component } from 'react'
import Logger from './Logger'

class High extends Component {
  wait() {
    for (let i = 0; i < 1000; i++) {
      console.log(i)
    }
  }
  render() {
    this.wait()
    return <div>High {this.props.name}</div>
  }
}

export default Logger(High)