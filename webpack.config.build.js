var path = require('path');
var pkg = require('./package.json');
const webpack = require("webpack")
module.exports = {
	entry: {
		pigeonGL: './src/index.js',
		// 'lib/three':'./src/lib/three.js'
	},
	output: {
		filename: '[name].js',
		library: "MiniGL",
		libraryTarget: "umd",
		libraryExport: "default" // 默认导出
	},
	optimization: {
		minimizer: []
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
							plugins: [
								["@babel/plugin-proposal-decorators", { legacy: true }],
								["@babel/plugin-proposal-class-properties", { loose: true }],
								"@babel/plugin-transform-runtime",
								"@babel/plugin-syntax-dynamic-import"
							]
						}
					}
				]
			},
		]
	},
};