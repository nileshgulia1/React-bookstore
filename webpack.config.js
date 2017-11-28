var path = require('path');
const config={
  entry: {
    javascript: "./app/index.js",
    html: "./build/index.html",
  },
  output:{
      filename: "bundle.js",
      path: __dirname + "./build"
  },
  module: {
      rules: [
        { test: /\.css$/, use: 'css-loader' },
        { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
        {
          test: [/\.(png|jpg|gif)$/,/\.html$/],
          use: [
            {
              loader: 'file-loader',
              options: {}  
            }
          ]
      },
      {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
      },
      {
        test: /\.js$ /,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
  ]
},
devServer: {
  contentBase: path.join(__dirname, "./build"),
  compress: true,
  port: 3000
}
}

module.exports = config;