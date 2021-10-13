const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js", // Navigate to the index.js file we created
	output: {
		path: path.join(__dirname, "/build"), // The directory containing the file to be built
		filename: "bundle.js", // The file name to be built
	},
	module: {
		rules: [
			{
				test: /\.js$/, // Will use babel-loader for .js . files
				exclude: /node_modules/, // Exclude node_modules . directory
				use: ["babel-loader"],
			},
			{
				test: /\.css$/, // Use style-loader, css-loader for .css files
				use: ["style-loader", "css-loader"],
			},
		],
	},
	// Contains plugins to install in the future
	plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
};
