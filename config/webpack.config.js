const production = process.env.NODE_ENV === "production";
const source_path = process.env.SOURCE_PATH || "/";

const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const my_dev_plugins = [
  new HtmlWebpackPlugin({
  title: 'My Template',
  template: 'app/template.html',
  }),
  new webpack.HotModuleReplacementPlugin()
]

const my_prd_plugins = [
  new HtmlWebpackPlugin({
  title: 'My Template',
  template: 'app/template.html',
  }),
  new FaviconsWebpackPlugin('./app/favicon.png'),
  new CleanWebpackPlugin([]),
  new webpack.optimize.OccurrenceOrderPlugin(),
  // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
]

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
      './app/scr/client.jsx'
  ],
  output: {
      path: '/www',
      filename: 'client.min.js',
      publicPath: source_path
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-0'],
          plugins: ['lodash', 'react-html-attrs', 'transform-class-properties'],
        }
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
        exclude: /node_modules/
    },
    {
      test: /\.css/,
      loader: 'style-loader!css-loader'
    }
    ]
  },
  plugins: production? my_prd_plugins : my_dev_plugins,

  devServer: {
    historyApiFallback: {inex: source_path},
    disableHostCheck: true,
    hot: true,
    inline: true,
    host: '0.0.0.0',
    overlay: {
      warnings: true,
      errors: true
    },

 }  

}


