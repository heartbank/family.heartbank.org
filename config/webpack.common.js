const helpers = require('./helpers/root.helper');
const pkg = require('../package.json');

// Webpack Plugins
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

// Other Plugins
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': [helpers.root('src'), 'bootstrap-loader'],
    'vendor': Object.keys(pkg.dependencies).filter(dep => !dep.includes('bootstrap'))
  },

  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel?cacheDirectory'], include: helpers.root('src') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css', 'postcss', 'sass'), include: helpers.root('src') },
      { test: /\.ejs$/, loader: 'ejs', include: helpers.root('src', 'template') }
    ]
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],

  plugins: [
    new CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),

    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' }
    ]),

    new DefinePlugin({
      'process.env': {
         NODE_ENV: JSON.stringify(process.env.NODE_ENV)
       }
    }),

    new ExtractTextPlugin('[name].[hash].css'),

    new HtmlWebpackPlugin({
      template: helpers.root('src', 'template', 'index.ejs'),
      appMountId: 'app',
      inject: false,
      production: process.env.NODE_ENV === 'production'
    })
  ]
}
