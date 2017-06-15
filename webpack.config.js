/**
 * Created by newhuan on 2017/6/13.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        es6:'./from/es6.js',
        test: './from/test.js',
        index: './from/index.js',
        personal: './from/personal.js',
        findBack: './from/findBack.js',
    },
    output: {
        path: __dirname + "\\to\\",
        filename: '[name]compiled.js',
        publicPath: __dirname + "\\to\\",
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                query: {
                presets: ['es2015']
                }
            }
        ]
    }
}