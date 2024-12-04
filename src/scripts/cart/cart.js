import { header } from "../../scripts/header/headercomponant.js";
import addToCart from "../../scripts/cart/addToCart.js";

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

  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (event) => {
      if (event.target.id === 'cart-btn') {
        const cartContainer = document.getElementById('cartContainer');
        if (cartContainer) {
          cartContainer.classList.toggle('showCartContainer');
        }
      }
    });
  });
