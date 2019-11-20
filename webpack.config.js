var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/i,
        use: [
            'style-loader',
            { 
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                }
            }
        ],
      },
    ]
  },
  externals: {
    'react': 'commonjs react' 
  }
};