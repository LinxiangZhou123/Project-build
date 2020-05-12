const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");
const HappyPack = require("happypack");
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

module.exports = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[hash].js",
        // publicPath: "[cdn.com]"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "@": path.join(__dirname, "src")
        }
    },
    module: {
        rules:[
            { 
                test: /\.jsx?$/, 
                use: 'happypack/loader?id=jsBabel', 
                exclude: /node_modules/ 
            },
            {
                test: /\.scss$/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10240
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[name].[id].css"
        }),
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new ProgressBarPlugin({
            format: '  构建中 [:bar] ' + chalk.green.bold(':percent') + ' (耗时:elapsed 秒)',
            clear: false
        }),
        new HappyPack({
            id: 'jsBabel',
            loaders: ['babel-loader?cacheDirectory'],
            threadPool: happyThreadPool
        })
    ]
}