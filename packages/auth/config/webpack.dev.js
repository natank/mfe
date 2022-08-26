const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const devConfig = {
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../', 'dist'),
		publicPath: 'http://localhost:8082/'
	},
	devServer: {
		port: 8082,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'auth',
			filename: 'remoteEntry.js',
			exposes: {
				'./AuthApp': './src/bootstrap'
			},
			shared: packageJson.dependencies
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
