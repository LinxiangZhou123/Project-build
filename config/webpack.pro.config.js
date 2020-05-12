const {smart} = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = smart(baseConfig, {
    mode: "production",
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        usedExports:true,
    },
    plugins: [
        new WorkboxPlugin({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
})