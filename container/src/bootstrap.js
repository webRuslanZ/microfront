import 'products/ProductsIndex' 
// products = сначала ищет в node_modules (не находит) и ищет уже в webpack.config.js -> ModuleFederationPlugin -> remotes 
// ProductsIndex = /products -> webpack.config.js -> ModuleFederationPlugin -> exposes

import 'cart/CartIndex'

console.log('Container');

document.querySelector('body').insertAdjacentHTML('afterbegin', "<h1>Мы в контейнере</h1>") 