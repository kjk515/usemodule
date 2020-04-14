const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/use.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    //publicPath: '/public',
  },
  //mode: 'development',
  //devServer: {
  //  contentBase: path.resolve(__dirname, 'public')
  //},
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물(output)을 추가해줌
      template: 'public/index.html',
    }),
  ],
}
