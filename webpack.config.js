const path = require('path');

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
},

module: {
  loaders: [
    {
      loader: 'babel-loader',
      query: {
        presets: [require.resolve("babel-preset-es2015")]
      },
      test: /\.js$/,
      exclude: /node_modules/
      }
    ]
  }
}

