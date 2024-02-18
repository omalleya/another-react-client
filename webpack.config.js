var path = require('path');

module.exports = {
	  mode: 'development',
	  entry: './src/app.js',
	  performance: {
		      hints: false,
		    },
	  output: {
		      filename: 'bundle.js',
		      path: path.resolve(__dirname, './build')
		    },
	  performance: { hints: false },
	  devServer: {
    static: {
      directory: path.join(__dirname, './'),
	  serveIndex: true
    },
    compress: true
},
	  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
