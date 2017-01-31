const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        loader: combineLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[folder]__[local]--[hash:base64:10]',
              sourceMap: true,
              import: false,
              url: true,
              importLoaders: 2
            }
          },
          {
            loader: 'resolve-url-loader',
            query: {
              sourceMap: false,
              silent: false,
              fail: true,
              keepQuery: true
            }
          },
          {
            loader: 'postcss-loader',
            query: {
              sourceMap: true
            }
          }
        ])
      },
      {
        test: /\.ttf$/,
        include: [
          path.resolve(__dirname, '../src/styles/fonts')
        ],
        loader: 'file-loader',
        query: {
          mimetype: 'application/octet-stream',
          name: 'assets/fonts/[name].[ext]'
        }
      }
    ]
  },

  postcss: (webpack) => {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
        path: [ 'styles' ],
        root: path.resolve(__dirname, '../src'),
        skipDuplicates: true
      }),
      require('postcss-cssnext')()
    ];
  },

  resolve: {
    alias:{
      Styles: path.resolve(__dirname, '../src/styles')
    }
  }
};