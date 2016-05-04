var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://115.28.67.218:3000',
      'webpack/hot/only-dev-server',
      "./js/index.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
      loaders:[
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
        {test: /\.css$/, loader: "style!css" },
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]

};
