# webpack配置

## 初始化

依赖

```bash
npm install webpack@4.41.5 webpack-cli@3.3.10 -D
```

运行

```bash
npx webpack --mode=development
```

## webpack中使用babel

依赖

```bash
npm install @babel/core @babel/preset-env -D

npm install @babel/polyfill  => core-js 和 regenerator-runtime


npm install @babel/plugin-transform-runtime -D
npm install @babel/runtime @babel/runtime-corejs3
```

配置

// .babelrc
{
  "presets": [
    "@babel/preset-env",
    {
      "useBuiltIns": "usage"
    }  
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
}


引用

// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/ //排除 node_modules 目录
      }
  ]
  }
}








# webpack打包后的文件