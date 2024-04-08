import { faker } from '@faker-js/faker'

const cartText = `<div>You have ${Math.floor(Math.random() * 100)} items in ur cart</div>`

document.querySelector('#cart-dev').innerHTML = cartText