const path = require('path');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

const config = {
    // Gives you sourcemaps without slowing down rebundling
    output: {
        // sourcemap support for IntelliJ/Webstorm
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        devtool: "cheap-module-source-map", // faster than 'source-map'
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-istanbul'
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: /\.png$/, loader: 'url-loader', query: { mimetype: 'image/png' } },
            { test: /\.jpg$/, loader: 'url-loader', query: { mimetype: 'image/jpg' } },
            { test: /\.gif$/, loader: 'url-loader', query: { mimetype: 'image/gif' } },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"test"'
        })
    ],
    sassLoader: {
        includePaths: [path.resolve(__dirname, './sass')]
    }
};

module.exports = config;
