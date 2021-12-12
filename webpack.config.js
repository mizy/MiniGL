const path = require('path');
let webpackConfig = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        library: 'MiniGL',
        libraryTarget: 'umd',
        libraryExport: 'default' // 默认导出
    },
    devtool: 'eval-source-map',
    devServer: {
        port: 8666,
        static: {
            directory: path.join(__dirname),
        },
        open: true,
        host: '0.0.0.0',
        hot: true,
    },
    mode: "development",
    stats: 'minimal',
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }

};

module.exports = webpackConfig;
