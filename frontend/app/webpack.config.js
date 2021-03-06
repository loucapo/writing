const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const validate = require('webpack-validator');
const combineLoaders = require('webpack-combine-loaders');

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),

  devServer: {
    host: '0.0.0.0',
    port: '8080',

    contentBase: path.resolve(__dirname, './index.tmpl.html'),
    historyApiFallback: true,

    hot: true,
    inline: true,

    // --progress - [assets, children, chunks, colors, errors, hash, timings, version, warnings]
    stats: {
      assets: true,
      children: true,
      chunks: false,
      colors: true,
      errors: true,
      errorDetails: true, //depends on {errors: true}
      hash: true,
      modules: false,
      publicPath: true,
      reasons: false,
      source: true, //what does this do?
      timings: true,
      version: true,
      warnings: true
    }
  },

  devtool: 'eval', //javascript sourcemaps

  entry: {
    app: ['babel-polyfill',
      'react-hot-loader/patch',
      './index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: [
          path.resolve(__dirname, '../node_modules/')
        ]
      },
      {
        test: /\.js$/,
        include: path.resolve('src/components/'),
        loader: 'istanbul-instrumenter-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/styles/postCssStyles'),
          path.resolve(__dirname, 'src/components'),
          path.resolve(__dirname, 'src/containers')
        ],
        loader: combineLoaders([
          {
            loader: 'style'
          },
          {
            loader: 'css',
            query: {
              modules: true,
              sourceMap: true,
              localIdentName: '[folder]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss'
          }
        ])
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src/styles'),
        ],
        loader: combineLoaders([
          {
            loader: 'style'
          },
          {
            loader: 'css',
            query: {
              modules: false,
              sourceMap: true,
            }
          }
        ])
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        query: { mimetype: 'image/png' } ,
        include: [
          path.resolve(__dirname, 'src/images')
        ]
      },
      {
        test: /\.ttf$/,
        include: [
          path.resolve(__dirname, 'src/styles/fonts')
        ],
        loader: 'url-loader',
        query: {
          mimetype: 'application/x-font-ttf'
        }
      },
      {
        test: /\.(svg)$/,
        loader: 'raw-loader',
        include: [
          path.resolve(__dirname, 'src/images')
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_BASE_URL: JSON.stringify(process.env.API_BASE_URL)
      }
    }),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true,
      hash: true,
      // cache: true,
      // chunks: ['app'],
      chunksSortMode: 'dependency',
      showErrors: true
    }),
    // Enable multi-pass compilation for enhanced performance
    // in larger projects. Good default.
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    //see possible syntax errors at the browser console instead of hmre overlay
    new webpack.NoErrorsPlugin()
  ],

  postcss: (webpack) => {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
        path: [ 'css', 'styles/postCssStyles', 'views' ],
        root: path.resolve(__dirname, 'src'),
        skipDuplicates: true
      }),
      require('postcss-cssnext')()
    ];
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias:{
      Styles: path.resolve(__dirname, 'src/styles/postCssStyles'),
      Containers: path.resolve(__dirname, 'src/containers')
    }
  }
};

module.exports = validate(webpackConfig, {
  rules: {
    'no-root-files-node-modules-nameclash': true, //default
    'loader-enforce-include-or-exclude': false,
    'loader-prefer-include': true
  }
});
