const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    clean: true,
    globalObject: 'this',
    library: {
      name: 'PalestraPotidayJsLibs',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  externals: {
    // Put here any dependency that you want to set as peerDependency
    // https://webpack.js.org/configuration/externals/#root
  },
};
