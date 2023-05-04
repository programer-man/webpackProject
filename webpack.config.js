const path = require('path');
//导入用于打包html的模块
const htmlWebpackPlugin = require('html-webpack-plugin')
//导入用于打包css到指定文件夹中的模块
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  //配置html打包
  plugins: [new htmlWebpackPlugin({
    template: './public/index.html'
  }), new MiniCssExtractPlugin({
    filename: "my.css"
  })],
  
  module: {
    rules: [
       //css打包
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //less打包
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", 'less-loader'],
      },
      //图片打包
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'img/[hash][ext]'
        }
      },
      //字体图标打包
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name][hash:6][ext]'
        }
      },
      //降级js语法
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use:[MiniCssExtractPlugin.loader, 'css-loader'],
    }
    ],
  },
  devServer: {
    port: 3000
  }

};