const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

/*
 * We've enabled commonsChunkPlugin for you. This allows your app to
 * load faster and it splits the modules you provided as entries across
 * different bundles!
 *
 * https://webpack.js.org/plugins/commons-chunk-plugin/
 *
 */
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH,"./");
let BUILD_PATH = path.resolve(ROOT_PATH,"dist");
module.exports = {
	entry:{
        "app":path.resolve(APP_PATH,"./index.jsx")
    },
    output:{
        path:BUILD_PATH,
        filename:"bundle.js"
    },
	resolve:{
        modules:[__dirname,'node_modules'],
        alias:{},
        extensions:["*",".js",".jsx"]
	},
	mode: 'development',
	module: {
		rules: [
			{
				test:/\.js[x]?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(less|css)$/,

				use: [
					{
						loader: 'css-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'less-loader',

						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},

	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		//new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title:"DEMO",
			template:"index.html",
			inject:true
		}),
		new OpenBrowserPlugin({
			url:"http://192.168.2.25:4444"
		}),
	]
};
