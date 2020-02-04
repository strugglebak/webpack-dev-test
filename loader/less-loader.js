const less = require('less')

function loader(source) {
  let css = ''
  less.render(source, (err, c) => {
    // source 转成 c.css
    css = c.css
  })
  // 将 css code 中的 \n 字符转换成 \\n ，不然浏览器会报错
  css = css.replace(/\n/g, '\\n')
  return css
}

module.exports = loader
