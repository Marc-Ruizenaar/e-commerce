// DISPLAY CART ON BUTTON CLICK

let cartShowButton = document.querySelector("#displayCartBtn");
let cartWindow = document.querySelector("#cartContainer");
let cartCloseButton = document.querySelector("#cartCloseBtn");

cartShowButton.addEventListener("click", () => {
    cartWindow.classList.toggle("showCartContainer")
})

cartCloseButton.addEventListener("click", () => {
    cartWindow.classList.toggle("showCartContainer")
})

// DISPLAY CART ITEM DEPENDING ON INDEX? FROM LOCAL STORAGE?

// GET PRODUCTS FROM LOCAL STORAGE

// cartItems
// function updateCartInLocalStorage(items) {
//    localStorage.setItem('cartItems', JSON.stringify(items));

// EXAMPLE

// for (let index = 0; index < json.length; index++) {

//     if ("content" in document.createElement("template")) {

//         const template = document.querySelector("#productrow");

//         const clone = template.content.cloneNode(true);

//         const title = clone.querySelector("#title");
//         title.textContent = json[index].title;

//         const description = clone.querySelector("#description");
//         description.textContent = json[index].description;

//         const price = clone.querySelector("#price");
//         price.textContent = json[index].price;

//         const button = clone.querySelector("button");
//         button.value = json[index].id;

//         productsSelector.appendChild(clone);
//     }
// }

// USING TEMPLATE
// function addProductToCart(productData) {
//     const template = document.getElementById('cart-product-template');
//     const productElement = template.content.cloneNode(true);
    
//     // Fill in product data
//     productElement.querySelector('img').src = productData.imageUrl;
//     productElement.querySelector('p').textContent = productData.name;
//     productElement.querySelector('.cartProductPrice').textContent = productData.price;
    
//     // Add to container
//     document.querySelector('.cart-products-container').appendChild(productElement);
//   }



