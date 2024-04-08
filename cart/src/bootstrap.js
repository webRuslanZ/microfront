import { faker } from '@faker-js/faker'

const mount = (el) => {
    const cartText = `<div>You have ${Math.floor(Math.random() * 100)} items in ur cart</div>`

    el.innerHTML = cartText
}

if (process.env.NODE_ENV === 'development') {
    const root = document.querySelector('#cart-dev')
    if (root) {
        mount(root)
    }
}

export { mount }