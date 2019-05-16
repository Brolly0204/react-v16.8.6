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

const transaction = new Transaction([
  {
    initialization() {
      console.log('initial')
    },
    close() {
      console.log('close')
    }
  }
])

transaction.perform(function() {
  console.log('preform')
})
