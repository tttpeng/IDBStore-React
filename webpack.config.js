var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://10.90.7.119:3000',
      'webpack/hot/only-dev-server',
      "./js/index.js"
    ],
    resolve: {
    extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
      loaders:[
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
        { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
        {test: /\.css$/, loader: "style!css" },
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]

};
