const config={
    entry: './app/index.js',
    output:{
        filename: "bundle.js",
        path: __dirname + "/"
    },
    module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' },
          { test: /\.ts$/, use: 'ts-loader' },
          {
            test: /\.(png|jpg|gif)$/,
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
        }
    ]
}
}

module.exports = config;