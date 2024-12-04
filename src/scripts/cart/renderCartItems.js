import { header } from "../../scripts/header/headercomponant.js";
import { addToCart } from "../../scripts/cart/addToCart.js";
import { cartDisplay } from "../../scripts/cart/cart.js";

  // DISPLAY CART ITEM FROM ARRAY IN LOCAL STORAGE

  export function renderCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
 const cartProductsContainer = document.querySelector('.cart-products-container');
    
    if (cartProductsContainer) {
  cartProductsContainer.innerHTML = '';
    
    // Render cart items
    cartItems.forEach(item => {
      const product = getProductDetails(item.id);
      
      const cartProductHTML = `
      <div class="cart-product" data-id="${item.id}">
        <div class="cart-product-info">
          <img src="${product.image}" alt="${product.title}" />
          <div class="cart-product-name">
            <p>${product.title}</p>
            <button class="removeProductBtn" type="button">Remove</button>
            <div class="product-quantity">
              <button class="quantity-btn minus">-</button>
              <input type="number" class="quantity-input" value="${item.quantity}" min="1" />
              <button class="quantity-btn plus">+</button>
            </div>
          </div>
        </div>
        <div class="cartProductPrice">$${(product.price * item.quantity).toFixed(2)}</div>
      </div>`;
    });
}}

function getProductDetails(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    return products.find(product => product.id === productId);
}
  
// REMOVE PRODUCT
// removeFromCart(productId): Remove item from the cart array.

//   function removeItem(index) {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.splice(index, 1);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     showCart();
//   }

// cartItems
// function updateCartInLocalStorage(items) {
//    localStorage.setItem('cartItems', JSON.stringify(items));

// function loadCart() {
//     const storedCart = localStorage.getItem('cart');
//     return storedCart ? JSON.parse(storedCart) : [];
//   }

// UPDATE QUANTITY
// updateCartItemQuantity(productId, quantity): Update item quantity.

// ADD UP PRICES
// quantity * price




// TEMPLATE EXAMPLE (FOR creating cart-product)

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