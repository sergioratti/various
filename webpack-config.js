const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
    },

  entry: path.resolve(__dirname,'dist','webpack','index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist','webpack'),
  },
};