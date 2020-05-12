const baseConfig = require("./webpack.base.config")
const webpack = require("webpack")
const path = require("path")
const {smart} = require('webpack-merge')

module.exports = smart(baseConfig, {
    mode: "development",
    entry: [
        path.resolve(__dirname, "../src/index.js"),
        "react-hot-loader/patch"
    ],
    devServer: {
        hot: true,
        host: "127.0.0.1",
        port: 1111,
        open:true,
        // proxy: {

        // }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
          })
    ]
})