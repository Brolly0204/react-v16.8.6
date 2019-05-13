import React from './react'
import ReactDOM from './react-dom'

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

class Welcome2 extends React.Component {
  render() {
    return React.createElement(
      'h1',
      {
        className: 'title',
        style: {
          color: 'red'
        }
      },
      'hello',
      this.props.name,
      ' ',
      this.props.age
    )
  }
}
console.dir(Welcome2)

let obj = {
  name: 'Brolly',
  age: 24
}

ReactDOM.render(
  React.createElement(Welcome2, obj),
  document.getElementById('root')
)

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
