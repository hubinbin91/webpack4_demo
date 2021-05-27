// import { Configuration } from 'webpack';
// const path = require('path')

/**
 * @type {Configuration}
 */
const config = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [ 
    // {
    //   test: '/\.js$/',
    //   use: {
    //     loader: 'babel-loader',
    //     options: {
    //       presets: [
    //         ['@babel-preset-env', {modules: 'commonjs'}]
    //       ]
    //     }
    //   }
    // },
    {
      // test: /\.css$/,
      // // 使用顺序从后到前
      // use: [
      //   'style-loader',
      //   'css-loader'
      // ]
      test: /\.md$/,
      use: './md-loader'
    }]
  },
  // optimization: {
  //   // 模块只导出被使用的
  //   usedExports: true,
  //   // 压缩输出结果
  //   minimize: true,
  //   // 尽可能合并每个模块到一个函数
  //   concatenateModules: true
  // }
}
module.exports = config;