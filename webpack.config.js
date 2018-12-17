const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin')  

module.exports = {
    entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'docs'),
		filename: 'index.bundle.js'
	},
    module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}