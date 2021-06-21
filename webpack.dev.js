const path = require('path');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
	mode: 'development',
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		port: 8080,
	},
});
