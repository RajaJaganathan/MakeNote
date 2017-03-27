const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanwWebpackPlugin = require('clean-webpack-plugin')

// Use https://github.com/webpack-contrib/babili-webpack-plugin/issues/23
// const BabiliPlugin = require('babili-webpack-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const buildPath = {
  SRC: path.resolve(__dirname, 'src'),
  BUILD: path.resolve(__dirname, 'build')
}

const config = {
  entry: {
    'scripts/vendor': './src/vendor.js',
    'scripts/app': './src/app/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  watch: true,
  devtool: 'source-map',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      options: {
        formatter: require('eslint-friendly-formatter'),
        failOnError: false,
        configFile: './.eslintrc.js'
      }
    }, {
      test: /\.(js)$/,
      loader: 'ng-annotate-loader'
    }, {
      test: /\.(js)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
      include: [buildPath.SRC]
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    },
    {
      test: /\.(jpg|jpeg|gif|png)$/,
      loader: 'url-loader'
    },
    {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      loader: 'url-loader'
    }
    ]
  },
  plugins: [
    new CleanwWebpackPlugin(['build']),
        // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('styles/style.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: function (a, b) {
        if (a.names[0] > b.names[0]) {
          return -1
        }
        if (a.names[0] < b.names[0]) {
          return 1
        }
        return 0
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['scripts/vendor'],
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
      context: 'src/assets',
      from: '**/*',
      to: 'assets'
    }])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000
  }
}

module.exports = config
