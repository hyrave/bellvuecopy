const currentTask = process.env.npm_lifecycle_event;
const path = require('path')
const fse = require('fs-extra')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/*let cssConfig = {
  test: /\.css$/i,
  use: ['css-loader?url=false',{loader: 'postcss-loader',options: {plugins: postCSSPlugins}}]
}
*/

const postCSSPlugins = [
  require('postcss-import')
]

let cssConfig = {
  test: /\.css$/i,
  use: ['css-loader?url=false',{loader: 'postcss-loader',options: {plugins: postCSSPlugins}}]
}

let pages = fse.readdirSync('./app').filter(function(file) {
  return file.endsWith('.html')
}).map(function(page) {
  return new HtmlWebpackPlugin({
      filename: page, 
      template: `./app/${page}`
  })
})

let config = {
  entry: './app/assets/scripts/App.js',
  /*plugins: [new HtmlWebpackPlugin({filename: 'index.html',template: './app/index.html'})],*/
  plugins: pages, 
  module: {
      rules: [
          cssConfig,
          {
              test: /\.js$/,
              exclude: /(node_modules)/
              /*use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-react','@babel/preset-env']
                  }
              }*/
          }
      ]
  }
}


if (currentTask == "dev") {
  //cssConfig.use.unshift('style-loader')
  config.output = {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'app')
  }
  config.devServer = {
      before: function(app, server) {
          server._watch('./app/**/*.html')
      },
      contentBase: path.join(__dirname,'app'),        
      hot: true,
      port: 49160,
      host: '0.0.0.0'
  }
  config.mode = 'development'
}

module.exports = config