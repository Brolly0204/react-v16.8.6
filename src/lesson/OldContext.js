import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = React.createContext()

class Page extends Component {
  constructor() {
    super()
    this.state = { color: 'gray' }
  }

  setColor = (color) => {
    this.setState({ color })
  }
  render() {
    return (
      <ThemeContext.Provider value={{color: this.state.color, setColor: this.setColor}}>
        <div style={{ border: '3px solid red', padding: '5px' }}>
          Page
          <Header />
          <Main />
        </div>
      </ThemeContext.Provider>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header
        style={{
          border: '3px solid green',
          padding: '5px'
        }}
      >
        Header
        <Title />
      </header>
    )
  }
}

// class Title extends Component {
//   static contextType = ThemeContext
//   render() {
//     return <div style={{ border: '3px solid pink', padding: '5px', color: this.context.color }}>Title</div>
//   }
// }

// 函数式组件（不是类 没有this 没有静态属性）
function Title(props) {
  return (
    <ThemeContext.Consumer>
      {
        value => (
          <div style={{ border: '3px solid pink', padding: '5px', color: value.color }}>Title</div>
        )
      }
    </ThemeContext.Consumer>
  )
}

class Main extends Component {
  render() {
    return (
      <main style={{ border: '3px solid orange', padding: '5px' }}>
        Main
        <Content />
      </main>
    )
  }
}

class Content extends Component {
  static contextType = ThemeContext
  changeColor = color => {
    this.context.setColor(color)
  }
  render() {
    return (
      <div style={{ border: '3px solid blue', padding: '5px' }}>
        <button onClick={() => this.changeColor('blue')}>blue</button>
        <button onClick={() => this.changeColor('red')}>red</button>
      </div>
    )
  }
}

export default Page
