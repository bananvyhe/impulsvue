const path = require('path');

module.exports = {
  watch: true,      
  entry: {
    turbolinks: './src/js/turbolinks.js',
    application1: './build/js/app.js'
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'app/assets/javascripts'),
    publicPath: "app/assets/images",
    library: "[name]"
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // ...
          postcss: [
            require('precss')({"lookup": false}),
            require('postcss-inline-svg'),
            require('lost'),
            require('postcss-cssnext')({features: {"rem": false}}),
            // require('postcss-hamster'),
            require('postcss-utilities')
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
         
        loader: 'url-loader' 
        
      } 
    ]
  }
};