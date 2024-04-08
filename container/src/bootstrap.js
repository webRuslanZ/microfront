// products = сначала ищет в node_modules (не находит) и ищет уже в webpack.config.js -> ModuleFederationPlugin -> remotes 
// ProductsIndex = /products -> webpack.config.js -> ModuleFederationPlugin -> exposes
import { mount as productsMount } from 'products/ProductsIndex'
import {mount as cartMount} from 'cart/CartIndex'


console.log('Container');

document.querySelector('body').insertAdjacentHTML('afterbegin', "<h1>Мы в контейнере</h1>") 

productsMount(document.querySelector('#my-products'))
cartMount(document.querySelector('#my-cart'))