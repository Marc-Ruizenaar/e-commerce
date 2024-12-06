import { header } from "../../scripts/header/headercomponant.js";
import { getData } from "../../scripts/api/fetchFakeProducts.js";
import { addToCart } from "../../scripts/cart/addToCart.js";
document.addEventListener('cartUpdate', renderCartItems);

export function cartDisplay() {
  const root = document.getElementById("cartContainer");
  if (!root) {
    console.error("Root element not found!");
    return;
  }
  const cartStructure = `
    <button id="cartCloseBtn" type="button">CLOSE</button>
    <h3>CART</h3>
    <div class="cart-products-container"></div>
    <div class="cart-checkout-info">
      <div class="cart-subtotal">
        <h3>SUBTOTAL</h3>
        <h3 id="subtotalPrice">0.00$</h3>
      </div>
      <button id="checkoutBtn">CHECKOUT</button>
    </div>
  `;
  
  root.innerHTML = cartStructure;

  const closeButton = document.getElementById("cartCloseBtn");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      root.classList.toggle("showCartContainer");
    });
  }

  renderCartItems();
  setupEventListeners();
}

function renderCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  console.log('Cart items:', cartItems);
  const cartProductsContainer = document.querySelector('.cart-products-container');

  if (!cartProductsContainer) return;

  cartProductsContainer.innerHTML = '';
  
  cartItems.forEach(item => {
    const product = getProductDetails(item.id);

    if (!product) return;

    const cartProductHTML = createCartItemHTML(item, product);
    console.log(cartProductHTML);
    cartProductsContainer.insertAdjacentHTML('beforeend', cartProductHTML);
  });

  updateSubtotal(cartItems);
}

function createCartItemHTML(item, product) {
  return `
    <div class="cart-product" data-id="${item.id}">
      <div class="cart-product-info">
        <div class="cart-img-container">
          <img class="cart-img" src="${product.image}" alt="${product.title}" />
         </div>
        <div class="cart-product-name">
          <p>${product.title}</p>
          <button class="removeProductBtn" type="button">Remove</button>
          <div class="quantity-and-price">
          <div class="product-quantity">
            <button class="quantity-btn minus">-</button>
            <input type="number" class="quantity-input" value="${item.quantity}" min="1" />
            <button class="quantity-btn plus">+</button>
          </div>
          <div class="cartProductPrice">$${(product.price * item.quantity).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>`;
}

function getProductDetails(productId) {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  return products.find(product => String(product.id) === String(productId));
}

export function updateSubtotal(cartItems) {
  const subtotal = cartItems.reduce((total, item) => {
    const product = getProductDetails(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  const subtotalElement = document.getElementById('subtotalPrice');
  if (subtotalElement) {
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  }
}

function setupEventListeners() {
  document.addEventListener('click', (event) => {
    if (event.target.id === 'cart-btn') {
      const cartContainer = document.getElementById('cartContainer');
      if (cartContainer) {
        cartContainer.classList.toggle('showCartContainer');
      }
    }

    if (event.target.classList.contains('quantity-btn')) {
      const input = event.target.parentElement.querySelector('.quantity-input');
      const productId = event.target.closest('.cart-product').dataset.id;
      if (event.target.classList.contains('plus')) {
        input.value = parseInt(input.value) + 1;
      } else if (event.target.classList.contains('minus')) {
        input.value = Math.max(1, parseInt(input.value) - 1);
      }
      updateCartItem(productId, parseInt(input.value));
    }

    if (event.target.classList.contains('removeProductBtn')) {
      const productId = event.target.closest('.cart-product').dataset.id;
      removeCartItem(productId);
    }
  });
}

function updateCartItem(productId, quantity) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const index = cartItems.findIndex(item => item.id === productId);
  if (index !== -1) {
    cartItems[index].quantity = quantity;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCartItems();
  }
}

function removeCartItem(productId) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems = cartItems.filter(item => item.id !== productId);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  renderCartItems();
}

// remove product when quantity becomes 0 in the cart