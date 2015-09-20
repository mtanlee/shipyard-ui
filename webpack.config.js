module.exports = {
    devtool: 'sourcemap',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'url-loader?limit=10000' }, 
            { test: /\.(eot|ttf|wav|mp3)$/, loader: 'file-loader' },
        ]
    }
};
