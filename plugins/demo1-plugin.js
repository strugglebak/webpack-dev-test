class Demo1Plugin {
  apply(compiler) {
    compiler.hooks.emit.tap('emit', () => {
      console.log('emit')
    })
  }
}
module.exports = Demo1Plugin