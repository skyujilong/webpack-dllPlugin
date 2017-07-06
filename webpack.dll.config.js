const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        bundle: ['react', 'react-dom']
    },
    output: {
        path: './build',
        filename: '[name].js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            path:  path.join(__dirname,'build','bundle.manifest.json'),
            name: '[name]_library'
        })
    ]
};
