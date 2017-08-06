module.exports = {
  entry: "./src/ForgottenRealmsDate.js",
  output: {
      path: __dirname,
      filename: "dist/bundle.js",
      libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
};