const path = require("path");
let webpackConfig = {
	entry: "./src/index.js",
	output: {
		filename: 'MiniGL.js',
		library: "MiniGL",
		libraryTarget: "umd",
		libraryExport: "default" // 默认导出
	},
	devtool: "inline-source-map",
	devServer: {
		port: 8666,
		open: true,
		host: "0.0.0.0",
		hot: true
	},
	stats: "minimal",
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader",
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	},

};

module.exports = webpackConfig;
