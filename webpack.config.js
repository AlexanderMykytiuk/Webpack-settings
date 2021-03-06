const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: "development",//production - меніфікація коду;
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ["style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({ filename: "styles.css" }),
        new HtmlWebpackPlugin({ template: "./src/index.html"})]
};

 
