const path = require('path');

const config = {
    entry: './src/lib/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist', 'lib'),
        library: '',
        libraryTarget: 'commonjs',
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }

};

module.exports = config;