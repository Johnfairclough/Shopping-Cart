

let carts = document.querySelectorAll('.add-cart');


let products = [
    {
        name: 'Womens Tennis Top',
        tag: 'pd1',
        price: '47.95',
        inCart: 0
    },
    {
        name: 'Womens Casual Top',
        tag: 'pd1',
        price: '22.95',
        inCart: 0
    },
    {
        name: 'Womens 1/4-Zip Footbal Jacket',
        tag: 'pd1',
        price: '59.95',
        inCart: 0
    },
    {
        name: 'Mens Pullover Hoodie',
        tag: 'pd1',
        price: '84.95',
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }

}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    
}

onLoadCartNumbers();