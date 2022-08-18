const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   entry: path.resolve(__dirname, 'src/index.js'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.s[ac]ss/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.(png|jp(e*)g|svg)/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: 'images/[hash]-[name].[ext]'
                  }
               }
            ]
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'src/index.html'),
      })
   ],
   devServer: {
      static: {
         directory: path.resolve(__dirname, 'dist'),
      },
      compress: true,
      port: 8080
   }
}