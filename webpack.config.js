const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            },
        ],
    },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Restaurant Page',
        filename: 'index.html',
        inject: 'body',
    })
  ]
};