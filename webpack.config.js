const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.expors = {
  mode: 'development',
  entry: 'index.js',
  output:{
    path: path.resolve(__dirname,'./dist'),
    filename: 'main.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html', // 模版地址
    })
  ],
  devServer: {
    contentBase: path.join(__dirname,'dist'), // node 从哪个路径获取
    port: 9000, // 端口
    open: true, // 自动打开浏览器
    hot: true
  }
}