/*global require*/
/*global __dirname*/

var path = require('path'); // eslint-disable-line no-use-before-define
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var node_modules = __dirname + '/node_modules';

const config = {
    // Gives you sourcemaps without slowing down rebundling
    devtool  : 'cheap-module-eval-source-map',
    resolve: { alias: {} },
    entry    : path.join(__dirname, 'src/index.js'),
    output   : {
        path      : path.join(__dirname, '/dist/'),
        filename  : 'bundle.js',
        publicPath: '/'
        },
    module   : {
        noParse:[],
        loaders: [
            { test   : /\.jsx?$/, exclude: node_modules, loader : 'babel-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.png$/, loader: "url-loader", query: { mimetype: "image/png" } },
            { test: /\.jpg$/, loader: "url-loader", query: { mimetype: "image/jpg" } },
            { test: /\.gif$/, loader: "url-loader", query: { mimetype: "image/gif" } },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
            // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loaders: ['url-loader?limit=10000&mimetype=application/font-woff' ] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html",
            favicon: 'src/sass/image/favicon.png'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase       : "./dist",
        colors            : true,
        historyApiFallback: true,
        inline            : true,
        hot               : true
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./sass")]
    }
};

module.exports = config;