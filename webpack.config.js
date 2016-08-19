module.exports = {
  entry: {
    bundle: './client/app.js',
    index: './index.html'
  },
  output: {
    path: './out',
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'out',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }      
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', './client']
  }
};