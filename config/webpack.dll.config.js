const path = require("path");
const webpack = require("webpack");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin")
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");

module.exports = {
    mode: "production",
    entry: {
        jquery: ["jquery"],
        react: ["react"],
        antd: ["antd"],
        lodash: ["lodash"]
    },
    output: {
        path: path.resolve(__dirname, "../dll"),
        filename: "[name].dll.js",
        library: "[name]_[hash]",
        libraryTarget: "this"
    },
    performance: {
        hints: "warning",
        maxAssetSize: 1024*10000,
        maxEntrypointSize: 1024*10000,
        assetFilter: function(assetFilename){
            return assetFilename.endsWith(".css") || assetFilename.endsWith(".js")
        }
    },
    plugins: [
        new webpack.DllPlugin({
            context: process.cwd(),
            path: path.resolve(__dirname, '..', 'dll/[name]-manifest.json'),
            name: "[name]_[hash]"
        }),
        new AddAssetHtmlPlugin({
           filepath: path.resolve(__dirname, "../dll/jquery.dll.js") 
        }),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, "../dll/jquery-manifest.json")
        }),
        new ProgressBarPlugin({
            format: '  构建中 [:bar] ' + chalk.green.bold(':percent') + ' (耗时:elapsed 秒)',
            clear: false
        })
    ]
}