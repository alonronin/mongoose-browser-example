var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: {
        app: path.join(__dirname, 'src', 'app.js'),
        vendors: ['jquery', 'bootstrap', 'mongoose']
    },

    output: {
        path: path.join(__dirname, 'www', 'js'),
        filename: 'bundle.js',
        publicPath: 'js/'
    },

    module: {
        noParse: [
            /^jquery$/,
            /^bootstrap$/,
            /^mongoose$/
        ],

        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            { test: /\.(woff2?|ttf|svg|eot)$/, loader: 'file'},
            { test: /\.json$/, loader: 'json' },
            { test: /\.md$/, loader: 'raw' }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery"
        }),

        new webpack.IgnorePlugin(/^kerberos$/),

        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

        new ExtractTextPlugin("styles.css")
    ],

    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};

module.exports = config;