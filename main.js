

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
        tag: 'pd2',
        price: '22.95',
        inCart: 0
    },
    {
        name: 'Womens 1/4-Zip Footbal Jacket',
        tag: 'pd3',
        price: '59.95',
        inCart: 0
    },
    {
        name: 'Mens Pullover Hoodie',
        tag: 'pd4',
        price: '84.95',
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }

}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {

    localStorage.setItem('totalCost', product.price);
    }
}


onLoadCartNumbers();