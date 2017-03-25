const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanwWebpackPlugin = require('clean-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        app: './src/app/app.js',
        vendor: './src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.(js)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            include: [
                path.resolve(__dirname, "src")
            ],
        }]
    },
    plugins: [
        new CleanwWebpackPlugin(['build']),
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new CopyWebpackPlugin([{
            context: 'src/mock-data',
            from: '**/*',
            to: 'mock-data'
        }, ])
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000       
    }
};

module.exports = config;
