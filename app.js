const main = document.querySelector('main')
const firstCard = document.querySelector('#firstCard')
const createTarget = document.getElementById('btn-click')


const file = document.getElementById('file')
const productName = document.getElementById('productName')
const option = document.getElementById('option')
const description = document.getElementById('description')




const img = 'https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600'

file.addEventListener('change', (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = (event) => {
        document.getElementById('img-card').src = event.target.result;
    }
    reader.readAsDataURL(file);
})

const createCard = () => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.src = img
    imgCard.alt = 'Producto'
    imgCard.id = 'img-card'

    const titleProduct = document.createElement('h2')
    titleProduct.textContent = 'coffe'

    const category = document.createElement('p')
    category.textContent = 'Bebida'

    const description = document.createElement('p')
    description.textContent =
        `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat   illum voluptatum quo repellendus veritatis impedit.
    `


    const price = document.createElement('p')
    price.classList.add('price')
    price.textContent = '$7000'

    // Asignar nodos hijos
    card.appendChild(imgCard)
    card.appendChild(titleProduct)
    card.appendChild(category)
    card.appendChild(description)
    card.appendChild(price)

    firstCard.appendChild(card)
}
window.addEventListener('DOMContentLoaded', createCard)
createTarget.addEventListener('click', createCard)