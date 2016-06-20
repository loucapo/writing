const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    // Gives you sourcemaps without slowing down rebundling
    devtool: 'cheap-module-eval-source-map',
    resolve: { alias: {} },
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
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    "presets": [
                        "es2015",
                        "react",
                        "stage-0"
                    ],
                    "env": {
                        "development": {
                            "plugins": [["react-transform", {
                                "transforms": [{
                                    "transform": "react-transform-hmr",
                                    "imports": ["react"], "locals": ["module"]
                                }]
                            }]],
                            "ignore": ["node_module", "src/sass/image"]
                        }
                    }
                }},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.json?$/, loader: 'json' },
            // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: /\.png$/, loader: 'url-loader', query: { mimetype: 'image/png' } },
            { test: /\.jpg$/, loader: 'url-loader', query: { mimetype: 'image/jpg' } },
            { test: /\.gif$/, loader: 'url-loader', query: { mimetype: 'image/gif' } },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tmpl.html',
            favicon: 'app/src/sass/image/favicon.png'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: './dist',
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './sass')]
    }
};

module.exports = config;
