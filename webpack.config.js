const path = require('path')
const demo1Plugin = require('./plugins/demo1-plugin')
const demo2Plugin = require('./plugins/demo2-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
				test: /\.less$/,
				use: [
					path.resolve(__dirname, 'loader', 'style-loader'),
					path.resolve(__dirname, 'loader', 'less-loader')
				]
			}
		]
	},
	plugins: [
		new demo1Plugin(),
		new demo2Plugin()
	]
}

