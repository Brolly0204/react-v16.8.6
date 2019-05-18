import React from 'react'

const style = {
  width: '200px',
  height: '100px',
  border: '1px solid red',
  overflow: 'auto'
}

class GetSnapshotBeforeUpdate extends React.Component {
  constructor() {
    super()
    this.state = { message: [4, 3, 2, 1, 0] }
    this.wrapper = React.createRef()
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ message: [this.state.message.length, ...this.state.message] })
    }, 1000)
  }

  getSnapshotBeforeUpdate() {
    return this.wrapper.current.scrollHeight
  }

  componentDidUpdate(props, state, prevScrollHeight) {
    const scrollTop = this.wrapper.current.scrollTop
    this.wrapper.current.scrollTop = scrollTop + this.wrapper.current.scrollHeight - prevScrollHeight
  }

  render() {
    return (
      <ul style={style} ref={this.wrapper}>
        {
          this.state.message.map((msg, idx) => (
            <li key={idx}>{msg}</li>
          ))
        }
      </ul>
    )
  }
}

export default GetSnapshotBeforeUpdate