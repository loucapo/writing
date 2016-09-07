const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');
const precss = require('precss');
const postcssImport = require('postcss-import');

const webpackConfig = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
    hot: true,
    host: '0.0.0.0',
    stats: {
      colors: true,
      chunks: false,
      errors: true
    }
  },
  devtool: 'cheap-module-eval-source-map',

  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    noParse: [],
    loaders: [
      { test: /\.jsx?$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader',
          query: {
            presets: [
              'es2015',
              'react',
              'stage-0'
            ],
            env: {
              development: {
                plugins: [['react-transform', {
                  transforms: [{
                    transform: 'react-transform-hmr',
                    imports: ['react'],
                    locals: ['module']
                  }]
                }]],
                ignore: ['node_module', 'src/sass/image']
              }
            }
          }},
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/sass'),
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader')
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.json?$/, loader: 'json' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.png$/, loader: 'url-loader', query: { mimetype: 'image/png' } }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css', { allChunks: true })
  ],

  postcss() {
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      precss,
      autoprefixer
    ];
  },

  resolve: { alias: {} }
};

module.exports = validate(webpackConfig);
