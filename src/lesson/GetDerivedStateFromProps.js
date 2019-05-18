import React from 'react'

class GetDerivedStateFromProps extends React.Component {
  constructor() {
    super()
    this.state = { number: 0 }
  }

  add = () => {
    this.setState({number: this.state.number + 1})
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.add}>+</button>
        <SubCounter number={this.state.number} />
      </div>
    )
  }
}

class SubCounter extends React.Component {
  
  state = {
    number: 0
  }
  static defaultProps = {
    number: 0
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.number % 2 === 0) {
      return { number: nextProps.number * 2 }
    } else {
      return { number: nextProps.number * 3 }
    }
  }

  render() {
    return <h3>{this.state.number}</h3>
  }
}

export default GetDerivedStateFromProps