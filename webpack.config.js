const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const constants = require('./src/constants');


module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            //template: path.resolve(__dirname,'/out/index.html'),
            template : "index.html",
            title: 'HTML Webpack Plugin',
            constants: constants
        })
    ],
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                    // you can specify a publicPath here
                    // by default it uses publicPath in webpackOptions.output
                    publicPath: '../',
                    hmr: process.env.NODE_ENV === 'development',
                    },
                },
                {
                    loader: "css-loader"
                }, 
                {
                    loader: "sass-loader",
                    // options: {
                    //     includePaths: ["absolute/path/a", "absolute/path/b"]
                    // }
                }
            ]
        }]
    }
};