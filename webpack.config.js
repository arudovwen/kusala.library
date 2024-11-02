const path = require('path');

module.exports = {
  entry: './src/index.ts', // Change to your entry file if necessary
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'kusala.library.js',
    library: 'KusalaLibrary', // The global variable name for UMD
    libraryTarget: 'umd',      // Output format
    umdNamedDefine: true,
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js'], // Add '.ts' to the resolvable extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Target TypeScript files
        use: 'ts-loader', // Use ts-loader to handle TypeScript
        exclude: /node_modules/, // Exclude node_modules
      },
    ],
  },
};
