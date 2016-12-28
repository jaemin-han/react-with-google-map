var webpack = require("webpack");
var path = require('path');
// var css = require("css-loader!./file.css");

module.exports = {

  entry: {
    app: "./src/components/app.js"
  },
  output: {
    filename: "build/bundle.js",
        sourceMapFilename: "build/bundle.map"
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query:{
          presets:['react', 'es2015']
        }
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader?root=." }
    ]
  }
}
