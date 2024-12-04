import {getProductsFromApi} from "../api/getProductsFromApi";
import { header } from "../../scripts/header/headercomponant.js";

// CAN BE CHANGED WITH TEMPLATE FROM HTML?

// CART CONTENT & DISPLAY/CLOSE CART ON BUTTON CLICK
export async function cartDisplay() {
  const root = document.getElementById("cartContainer");
  if (root) {
    root.innerHTML = `
    <button id="cartCloseBtn" type="button">CLOSE</button>
      <h3>CART</h3>
      <div class="cart-products-container">
        <div class="cart-product">
          <div class="cart-product-info">
            <img src="" alt="" />
            <div class="cart-product-name">
              <!-- add id to be same as in api js -->
              <p>Product name</p>
              <button id="removeProductBtn" type="button">Remove</button>
              <div class="product-quantity">
                <button class="quantity-btn minus">-</button>
                <input type="number" class="quantity-input" value="1" min="1" />
                <button class="quantity-btn plus">+</button>
              </div>
            </div>
          </div>
          <div id="cartProductPrice">60$</div>
        </div>
      </div>

      <div class="cart-checkout-info">
        <div class="cart-subtotal">
          <h3>SUBTOTAL</h3>
          <h3 id="subtotalPrice">60$</h3>
        </div>
        <button id="checkoutBtn">CHECKOUT</button>
      </div>
      `;
      const closeButton = document.getElementById("cartCloseBtn");
      if (closeButton) {
        closeButton.addEventListener("click", () => {
          // Toggle the showCartContainer class
          root.classList.toggle("showCartContainer");
        });
      } else {
        console.error("Close button not found!");
      }
    } else {
      console.error("Root element not found!");
    }
  }


  // DISPLAY CART ITEM FROM ARRAY IN LOCAL STORAGE

// function showCart() {

    // ADD CONNECTION TO LOCAL STORAGE ARRAY!
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.querySelector(".cart-products-container");
//     cartContainer.innerHTML = '';

//     if ("content" in document.createElement("template")) {

//         const template = document.querySelector("#cartProductTemplate");
//         const clone = template.content.cloneNode(true);

//         const photo = clone.querySelector(".cart-product-photo");
//         photo ???

//         const title = clone.querySelector(".cart-product-title");
//         title.textContent = json[index].title;

//         const quantity = clone.querySelector(".quantity-input");
//         quantity.textContent = json[index].???;

//         const price = clone.querySelector("#cartProductPrice");
//         price.textContent = json[index].price;

//         const button = clone.querySelector("button");
//         button.value = json[index].id;

//         productsSelector.appendChild(clone);
//     }
  
//);
//   }

  
//   function updateQuantity(index, quantity) {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart[index].quantity = quantity;
//     localStorage.setItem('cart', JSON.stringify(cart));
//     showCart();
//   }
  
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

// REMOVE PRODUCTS & UPDATE QUANTITY

// removeFromCart(productId): Remove item from the cart array.
// updateCartItemQuantity(productId, quantity): Update item quantity.