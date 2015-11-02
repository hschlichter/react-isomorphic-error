'use strict';

var path = require('path');
var webpack = require('webpack');

var entry = {
	vendor: ['react', 'react-dom'],
	client: 'client.js'
};

module.exports = [{
	context: __dirname,
	entry: entry,
	output: {
		path: path.join(__dirname, 'dist', 'js'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [__dirname],
		modulesDirectories: ['node_modules']
	}
}];
