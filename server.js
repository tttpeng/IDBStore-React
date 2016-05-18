var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  compress: true,

  // proxy: {
  //   '*': {
  //     // target: 'http://www.pgyer.com',
  //     // host:'http://www.pgyer.com',
  //     changeOrigin: true,
  //     // secure: false
  //   }
  // } 

}).listen(3000, '10.90.7.119', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://10.90.7.119:3000/');
});
