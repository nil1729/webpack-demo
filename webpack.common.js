const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: { main: './src/js/index.js', vendor: './src/js/vendor/vendor.js' },
	output: {
		assetModuleFilename: 'images/[name].[hash][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				use: {
					loader: 'html-loader',
				},
			},
			{
				test: /\.(png|jpe?g)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'template', 'index.html'),
		}),
	],
};
