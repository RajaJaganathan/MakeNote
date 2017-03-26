const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanwWebpackPlugin = require('clean-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        vendor: './src/vendor.js',
        app: './src/app/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [{
                test: /\.(js)$/,
                use: {
                    loader: 'ng-annotate-loader',
                }
            }, {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                },
                include: [
                    path.resolve(__dirname, "src")
                ]
            }, {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: [{
                    loader: "url-loader"
                }]
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: "file-loader"
                }]
            },
        ]
    },
    plugins: [
        new CleanwWebpackPlugin(['build']),
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: function(a, b) {
                if (a.names[0] > b.names[0]) {
                    return -1;
                }
                if (a.names[0] < b.names[0]) {
                    return 1;
                }
                return 0;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            Infinity
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new CopyWebpackPlugin([{
            context: 'src/app',
            from: '**/*.html',
            to: 'app/'
        }, {
            context: 'src/mock-data',
            from: '**/*',
            to: 'mock-data'
        }, {
            context: 'src/images',
            from: '**/*',
            to: 'images'
        }, {
            context: 'src/styles',
            from: '**/*',
            to: 'styles'
        }])
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000
    }
};

module.exports = config;
