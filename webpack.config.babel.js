import webpack from 'webpack';
import es3ifyPlugin from 'es3ify-webpack-plugin';

import pkg from './package.json';
const src = pkg.path.src + 'scripts/';
const dest = pkg.path.dest + 'scripts/';

const config = {
  entry: {
    common: src + 'common.js',
    top: src + 'top.js',
    feature: src + 'feature.js',
    'article-index': src + 'article-index.js',
    'article-detail': src + 'article-detail.js'
  },
  output: {
    filename: dest + '[name].bundle.js'
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
    //new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  externals: [{
    jQuery: true,
    $: true
  }],
  module: {
    loaders: [
      {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        query: {
          presets: ['es2015', 'stage-3'],
          plugins: ['transform-runtime', 'transform-react-jsx']
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
