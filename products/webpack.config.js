const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/index.js'
            },
            //шарим модуль faker. 
            //Контейнер, когда загрузка дойдет до этого remoteEntry, увидит, что мы шарим faker и если кому то еще нужен этот модуль, то он его передаст
            //Теперь этот модуль асинхронен для изначальных потребителей
            shared: ["@faker-js/faker"]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}