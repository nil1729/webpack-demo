const path = require('path');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = merge(commonConfig, {
	mode: 'production',
	output: {
		filename: 'js/[name].[contenthash].min.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'styles/[name].[fullhash].min.css' }),
		new CleanWebpackPlugin(),
		new ImageMinimizerPlugin({
			minimizerOptions: {
				plugins: [
					['jpegtran', { progressive: true }],
					['optipng', { optimizationLevel: 5 }],
				],
			},
		}),
	],
});
