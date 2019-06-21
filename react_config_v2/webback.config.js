const path = require('path');

module.exports = {
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "./dist/bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: 
      }
    ]
  }
}