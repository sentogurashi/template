import webpack from 'webpack';
import es3ifyPlugin from 'es3ify-webpack-plugin';

import pkg from './package.json';
const src = pkg.path.src;
const dest = pkg.path.dest;

const config = {
  entry: [src + 'scripts/main.js'],
  output: {
    filename: dest + 'scripts/bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
  },
//  devtool: 'inline-source-map',
  plugins: [
    new webpack.optimize.DedupePlugin(),  //重複排除
    new webpack.optimize.AggressiveMergingPlugin(),　//できるだけまとめてコードを圧縮する
    new webpack.optimize.UglifyJsPlugin(),
    new es3ifyPlugin()
  ],
  externals: [{
    jQuery: true,
    $: true,
    THREE: true
  }],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        query: {
          presets: ['es2015', 'stage-3'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },
  stats: {
    colors: true,
    chunks: false
  }
}

export default config;
