const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/',
                        // name: '[name]-[sha1:hash:7].[ext]'
                    }
                }]
            },

            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts/',
                    }
                }]
            },
            /* {
                 test: /\.js$/,
                 use: [{
                     loader: 'file-loader',
                     options: {
                         outputPath: 'js/',

                     }
                 }]
             },*/
            {
                test: /\.(css)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },

        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: 'public//index.html'
        })
    ]
};