const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.html$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: "development"
}
