const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/client/index.html",
	filename: "./index.html"
});

module.exports = {
	entry: "./src/client/index.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	devServer: {
		port: 3000,
		proxy: {
			'/api/**': {
				target: 'http://localhost:6200'	
			}
		}
	},
	plugins: [htmlPlugin]
}
