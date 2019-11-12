const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
            options: { 
                insert: 'head', // insert style tag inside of <head>
                injectType: 'singletonStyleTag' // this is for wrap all your style in just one style tag
            },
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [ { 
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './asset/img',
          }
        }],
      }
    ]
  }
}