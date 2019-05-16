
const batchingStrategy = {
  isBatchingUpdates: false,
  dirtyComponents: [],
  batchedUpdates() {
    this.dirtyComponents.forEach(component => component.updateComponent())
    console.log('batchUpdate')
  }
}

class Updater {
  constructor(component) {
    this.component = component
    this.pendingStates = []
  }

  addState(newState) {
    this.pendingStates.push(newState)
    batchingStrategy.isBatchingUpdates ? batchingStrategy.dirtyComponents.push(this.component) : this.component.updateComponent()
  }
}

class Component {
  constructor(props) {
    this.props = props
    this.updater = new Updater(this)
  }

  setState(newState) {
    this.updater.addState(newState)
  }

  updateComponent() {
    this.updater.pendingStates.forEach(newState => Object.assign(this.state, newState))
    this.updater.pendingStates.length = 0
    let oldElement = this.domElement
    let newElement = this.renderElement()
    oldElement.parentNode.replaceChild(newElement, oldElement)
  }

  createDOMFromDOMString(domStr) {
    const div = document.createElement('div')
    div.innerHTML = domStr
    return div.children[0]
  }

  renderElement() {
    let htmlString = this.render()
    this.domElement = this.createDOMFromDOMString(htmlString)
    this.domElement.component = this
    return this.domElement
  }

  mount(container) {
    container.appendChild(this.renderElement())
  }
}

window.trigger = function(event, method, ...rest) {
  batchingStrategy.isBatchingUpdates = true
  const component = event.target.component
  component[method].call(component, event, ...rest)
  console.log('同步执行结束')
  batchingStrategy.isBatchingUpdates = false
  batchingStrategy.batchedUpdates()
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { number: 0 }
  }

  add() {
    this.setState({ number: this.state.number + 1 })
    console.log('add1', this.state.number)
    this.setState({ number: this.state.number + 1 })
    console.log('add2', this.state.number)

    
    setTimeout(() => {
      this.setState({ number: this.state.number + 1 })
      console.log('add3', this.state.number)
      this.setState({ number: this.state.number + 1 })
      console.log('add4', this.state.number)
    })
  }

  render() {
    return `<button onclick="trigger(event, 'add')" id="counter-app">${this.props.title}: ${
      this.state.number
    }</button>`
  }
}
