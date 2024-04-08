import { faker } from '@faker-js/faker'

const mount = (el) => {
    let products = ''

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }

    el.innerHTML = products
}


//Проверка что мы находимся в изолированном режиме и используем свой index.html, а не контейнера 
if (process.env.NODE_ENV === 'development') {
    const root = document.querySelector('#dev-products')
    if(root) {
        mount(root)
    }
}


//Экспортируем для использования внутри контейнера
export { mount }