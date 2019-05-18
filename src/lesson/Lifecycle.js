import React from 'react'

class Lifecycle extends React.Component {
  static defaultProps = {
    name: '计数器'
  }

  constructor(props) {
    super(props)
    this.state = { number: 0 }
    console.log('1.父组件初始化props and state')
  }

  componentWillMount() {
    console.log('2.父组件将要挂载')
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('父组件', nextProps, nextState)
  }

  shouldComponentUpdate() {
    console.log('询问父组件是否要更新')
    return true
  }

  add = () => {
    this.setState({ number: this.state.number + 1 })
  }

  render() {
    console.log('3.父组件开始渲染')
    return (
      <div style={{border: '2px solid red'}}>
        <h3>{this.state.number}</h3>
        <button onClick={this.add}>+</button>
        {
          !(this.state.number % 3) && <SubCounter number={this.state.number}/>
        }
      </div>
    )
  }

  componentDidMount() {
    console.log('4.父组件挂载完成')
  }
}

class SubCounter extends React.Component {
  static defaultProps = {
    number: 0
  }

  componentWillMount() {
    console.log('子组件开始挂载')
  }

  componentWillReceiveProps(props) {
    console.log('子组件接收到props', props)
  }

  shouldComponentUpdate(nextProps) {
    console.log('子组件需要更新props?')
    return !(nextProps.number % 3)
  }

  componentWillUnmount() {
    console.log('子组件卸载')
  }

  render() {
    return (
      <div style={{border: '2px solid green'}}>
        <p>{this.props.number}</p>
      </div>
    )
  }
}

export default Lifecycle