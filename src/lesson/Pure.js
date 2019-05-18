import React, { Component, PureComponent } from 'react'


// class PureComponent extends Component {
//   isPureComponent = true
//   shouldComponentUpdate(nextProps, nextState) {
//     return !showEqual(this.props, nextProps) || !showEqual(this.state, nextState)
//   }
// }

const showEqual = (obj1, obj2) => {

  if (obj1 === obj2) {
    return true
  }

  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false
  }

  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

// class Pure extends PureComponent {
class Pure extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '计数器', number: 0 }
    this.input = React.createRef()
  }

  add = () => {
    this.setState({ number: this.state.number + parseFloat(this.input.current.value) })
    this.input.current.value = 0
  }
  render() {
    console.log('Pure render')
    return (
      <div>
        <Title title={this.state.title}></Title>
        <Counter number={this.state.number}></Counter>
        <input ref={this.input} type="text" defaultValue='0' />
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

class Title extends React.Component {
  render() {
    console.log('Title render')
    return <h3>{this.props.title}</h3>
  }
}



class Counter extends React.Component {
  render() {
    console.log('Counter render')
    return <h3>{this.props.number}</h3>
  }
}

Title = React.memo(Title)
Counter = React.memo(Counter)
export default Pure
