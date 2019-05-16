import React from 'react'
import ReactDOM from 'react-dom'

// class TextInput extends React.Component {
//   constructor() {
//     super()
//     this.text = React.createRef()
//   }
//   render() {
//     return <input ref={this.text} type="text"/>
//   }
// }

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    console.log(this.input)
  }

  getFocus = () => {
    console.log(this.input)
    this.input.current.focus()
    // this.input.current.text.current.focus()
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.getFocus}>Focus</button>
        <TextInput2 ref1={this.input} />
      </React.Fragment>
    )
  }
}

let TextInput = (props, ref) => {
  console.log(ref)
  return <input ref={ref} type="text"/>
}

function forwardRef(Component) {
  return function(props) {
    return Component(props, props.ref1)
  }
}

let TextInput2 = forwardRef(TextInput)

// TextInput = React.forwardRef(TextInput)

// console.log(TextInput)

ReactDOM.render(<Form/>, document.getElementById('root'))


// class Sum extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { total: 0 }
//     this.numA = React.createRef()
//     this.numB = React.createRef()
//     this.res = React.createRef()
//   }

//   sum = () => {
//     let total =  this.numA.current.value * 1 + this.numB.current.value * 1
//     this.res.current.value = total
//   }

//   componentDidMount() {
//     console.log(this.numA)
//     console.log(this.numB)
//   }

//   render() {
//     return (
//       <>
//         <input ref={this.numA} type="text"/>
//         <button onClick={this.sum}>+</button>
//         <input ref={this.numB} type="text"/>
//         =
//         <input ref={this.res} type="text"/>
//       </>
//     )
//   }
// }

// ReactDOM.render(<Sum/>, document.getElementById('root'))

// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       num: 0
//     }
//   }
  
//   add = () => {
//     // this.forceUpdate()
//     // this.setState({ num: this.state.num + 1 })
//     // console.log(this.state.num)
//     // if (this.state.num % 5 === 0) {
//     //   this.setState({ num: this.state.num })
//     // }

//     // this.setState({num: 1})


//     // this.setState({num: 2})

//     // setTimeout(() => {
//     //   console.log('timeout', this.state.num)
//     // }, 0)

//     // setImmediate(() => {
//     //   console.log('immediate', this.state.num)
//     // }, 0)

//     // process.nextTick(() => {
//     //   console.log('pro', this.state.num)
//     // })

//     // this.setState({num: 3})

//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.add}>{this.state.num}</button>
//       </>
//     )
//   }
// }

// ReactDOM.render(<Clock/>, document.getElementById('root'))

// let element = React.createElement(
//   'h1',
//   {
//     className: 'title',
//     style: {
//       color: 'red',
//       fontSize: '24px'
//     }
//   },
//   'Hello Brolly!', ' ',
//   React.createElement('i', {
//     className: 'text'
//   }, 'ReactJs')
// )

// function Welcome(props) {
//   // return <h1>{props.title} <i>{props.text}</i></h1>
//   return React.createElement(
//     'h1',
//     {
//       className: 'title',
//       style: {
//         color: 'red',
//         fontSize: '28px'
//       }
//     },
//     props.title,
//     React.createElement('i', null, props.text)
//   )
// }

// let pops = {
//   title: 'Hello, 布罗利！',
//   text: '我爱你'
// }
// let element = React.createElement(Welcome, pops)

// class Welcome extends React.Component {
//   static isReactComponent = true
//   render() {
//     return React.createElement(
//       'h1',
//       {
//         className: 'title',
//         style: {
//           color: 'red',
//           fontSize: '28px'
//         }
//       },
//       props.title,
//       React.createElement('i', null, props.text)
//     )
//   }
// }

// let props = {
//   title: 'Hello, 布罗利！',
//   text: '我爱你'
// }

// let element = React.createElement(Welcome, props)
// console.log(element)
// ReactDOM.render(element, document.getElementById('root'))

// function Welcome(props) {
//   return <h1>hello {props.name} {props.age}</h1>
// }

// function Welcome(props) {
//   return React.createElement(
//     'h1',
//     {
//       className: 'title',
//       style: {
//         color: 'red'
//       }
//     },
//     'hello',
//     props.name,
//     ' ',
//     props.age
//   )
// }

// let obj = {
//   name: 'Brolly',
//   age: 24
// }

// ReactDOM.render(
//   React.createElement(Welcome, obj),
//   document.getElementById('root')
// )

// class Welcome2 extends React.Component {
//   render() {
//     return React.createElement(
//       'h1',
//       {
//         className: 'title',
//         style: {
//           color: 'red'
//         }
//       },
//       'hello',
//       this.props.name,
//       ' ',
//       this.props.age
//     )
//   }
// }
// console.dir(Welcome2)

// let obj = {
//   name: 'Brolly',
//   age: 24
// }

// ReactDOM.render(
//   React.createElement(Welcome2, obj),
//   document.getElementById('root')
// )

// ReactDOM.render(<Welcome {...obj} />, document.getElementById('root'))

// let element = React.createElement(
//   'h3',
//   {
//     className: 'title',
//     style: {
//       color: 'red',
//       fontSize: '24px'
//     }
//   },
//   'Hello Brolly!',
//   React.createElement('span', null, ' i love you')
// )

// console.log(element)

// ReactDOM.render(element, document.getElementById('root'))

// const Welcome = props => {
//   return (
//     <React.Fragment>
//       <h3>{props.name}</h3>
//       <h3>{props.age}</h3>
//     </React.Fragment>
//   )
// }

// class Welcome extends React.Component {
//   render() {
//     const { name, age } = this.props
//     return (
//       <React.Fragment>
//         <h3>{name}</h3>
//         <h3>{age}</h3>
//       </React.Fragment>
//     )
//   }
// }

// let props = {
//   name: 'Brolly',
//   age: 24
// }
// ReactDOM.render(
//   <Welcome {...props} />,
//   document.getElementById('root')
// )

// let ele = <h3 className="text">hello <span>world</span></h3>
// console.log(ele)
// ReactDOM.render(<Welcome name="Brolly" age="18"/>, document.getElementById('root'))
// setInterval(() => {
//   let element = (
//     <ul>
//       <li>item1</li>
//       <li>item2</li>
//       <li>{new Date().toLocaleTimeString()}</li>
//     </ul>
//   )

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   )
// }, 1000);

// console.log(ReactDOM)

// ReactDOM.render(
//   <h3>hello react!</h3>,
//   document.getElementById('root')
// )

// let element = React.createElement('h3', '', 'hello react!!!')
// let element = <h3 className="text">hello <span>world</span></h3>
// let element = React.createElement('h3', { className: 'text' }, 'hello ', React.createElement('span', '', 'world!'))
// let element = <h3 className="text" style={{color: 'red'}}>hello <span>world</span></h3>

// console.log(element)

// ReactDOM.render(element, document.getElementById('root'))
