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
                './ProductsIndex': './src/bootstrap.js'
            },
            //шарим модуль faker. 
            //Контейнер, когда загрузка дойдет до этого remoteEntry, увидит, что мы шарим faker и если кому то еще нужен этот модуль, то он его передаст
            //Теперь этот модуль асинхронен для изначальных потребителей
            shared: ["@faker-js/faker"]
            //Другой вариант записи. 
            // singleton - говорит, чтобы вебпак загружал только один модуль faker-а, а не пытался загрузить другие, при условии, использовани разных версий  в микрофронтах 
            // shared: {
            //     "@faker-js/faker": {
            //         singleton: true
            //    }
            // }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}