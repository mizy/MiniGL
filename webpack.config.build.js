var path = require('path');
var pkg = require('./package.json');
const webpack = require("webpack")
module.exports = {
	entry: {
		MiniGL: './src/index.js',
		// 'lib/three':'./src/lib/three.js'
	},
	output: {
		filename: '[name].js',
		library: "MiniGL",
		libraryTarget: "umd",
		libraryExport: "default" // 默认导出
	},
	
	externals:["three","gl-matrix"],

	optimization: {
		minimizer: []
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader",
					}
				]
			},
		]
	},
};