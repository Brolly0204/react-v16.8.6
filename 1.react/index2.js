class Updater {
  constructor(component) {
    this.component = component
    this.pendingState = []
  }

  addState(newState) {
    this.pendingState.push(newState)
    batchingStrategy.isBatchingUpdates
      ? batchingStrategy.dirtyComponents.push(this.component)
      : this.component.updateComponent()
  }
}

class Transaction {
  constructor(wrappers) {
    this.wrappers = wrappers
  }
  perform(anyMethod) {
    this.wrappers.forEach(wrapper => wrapper.initialization())
    anyMethod()
    this.wrappers.forEach(wrapper => wrapper.close())
  }
}

let batchingStrategy = {
  isBatchingUpdates: false,
  dirtyComponents: [],
  batchedUpdates() {
    this.dirtyComponents.forEach(component => component.updateComponent())
  }
}

class Component {
  constructor(props) {
    this.props = props
    this._updater = new Updater(this)
  }

  createElementDOM(domStr) {
    const div = document.createElement('div')
    div.innerHTML = domStr
    return div.children[0]
  }

  setState(newState) {
    // 暂存到pending队列中
    this._updater.addState(newState)
  }

  updateComponent() {
    this._updater.pendingState.forEach(state =>
      Object.assign(this.state, state)
    )
    this._updater.pendingState.length = 0
    const oldElement = this.domElement
    const newElement = this.renderElement()
    oldElement.parentNode.replaceChild(newElement, oldElement)
  }

  renderElement() {
    let htmlString = this.render()
    this.domElement = this.createElementDOM(htmlString)
    this.domElement.component = this
    return this.domElement
  }

  mount(container) {
    container.appendChild(this.renderElement())
  }
}

let transaction = new Transaction([
  {
    initialization() {
      // 当有事件触发时 开启批量更新状态
      batchingStrategy.isBatchingUpdates = true
    },
    close() {
      // 事件执行完后 关闭批量更新状态
      batchingStrategy.isBatchingUpdates = false
      // 进行批量更新
      batchingStrategy.batchedUpdates()
    }
  }
])

window.trigger = (event, method) => {
  transaction.perform(() => {
    let component = event.target.component
    component[method].call(component, event)
  })
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { number: 0 }
  }

  add() {
    this.setState({ number: this.state.number + 1 })
    console.log(this.state.number)
    this.setState({ number: this.state.number + 1 })
    console.log(this.state.number)

    setTimeout(() => {
      this.setState({ number: this.state.number + 1 })
      console.log(this.state.number)
      this.setState({ number: this.state.number + 1 })
      console.log(this.state.number)
    })
  }

  render() {
    return `<button onclick="trigger(event, 'add')">${this.props.name}: ${
      this.state.number
    }</button>`
  }
}
