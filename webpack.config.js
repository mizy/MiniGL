module.exports = {
    cache: true,
    entry: {
        index: "./src/global.ts"
    },
    output: {
        library: "MiniGL",
        libraryTarget: "umd",
        libraryExport: "default", // 默认导出
        filename: "mini-gl.js"
    },
    mode: 'development',
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules|dist/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
