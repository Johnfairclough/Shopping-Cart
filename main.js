

let carts = document.querySelectorAll('.add-cart');


let products = [
    {
        name: 'Womens Tennis Top',
        tag: 'pd1',
        price: 47,
        inCart: 0
    },
    {
        name: 'Womens Casual Top',
        tag: 'pd2',
        price: 22,
        inCart: 0
    },
    {
        name: 'Womens 1/4-Zip Footbal Jacket',
        tag: 'pd3',
        price: 59,
        inCart: 0
    },
    {
        name: 'Mens Pullover Hoodie',
        tag: 'pd4',
        price: 84,
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
        cartCost = parseInt(cartCost);

        console.log("my cart cost is", cartCost);

        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
    localStorage.setItem("totalCost", product.price);
    }
}


function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += 
            `<div class="product">
            <ion-icon name="close-circle"></ion-icon>
            <img src="./images/${item.tag}.jpg">
            <span class="item-name">${item.name}</span>
            <div class="price">£${item.price}</div>
            <div class="quantity">
            <ion-icon name="remove-circle-outline"></ion-icon>
            <span>${item.inCart}</span>
            <ion-icon name="add-circle-outline"></ion-icon>
            </div>
            <div class="total">£${item.inCart * item.price}</div>
            `
        });

        productContainer.innerHTML += ` 
        <div class="basketTotalContainer>
        <h4 class="basketTotalTitle>
        Basket Total
        </h4>
        <h4 class="basketTotal">
        £${cartCost}
        </h4>
        `;
    }
}

onLoadCartNumbers();
displayCart()