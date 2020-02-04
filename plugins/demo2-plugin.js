class Demo2Plugin {
  apply(compiler) {
    compiler.hooks.afterPlugins.tap('afterPlugins', () => {
      console.log('afterPlugins')
    })
  }
}
module.exports = Demo2Plugin