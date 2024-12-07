import paypalIcon from "../../assets/img/paypal_icon.svg";
import paypalLogo from "../../assets/img/paypal-logo.png";
import {getProductDetails} from "../../scripts/cart/displayCart.js"; // Import existing helper function

function renderCheckoutCart() {
  const finalProductContainer = document.querySelector(
    ".final-product-container"
  );
  if (!finalProductContainer) {
    console.error("Final product container not found!");
    return;
  }

  // Clear any existing content
  finalProductContainer.innerHTML = "";

  // Retrieve cart items
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Retrieve product details
  cartItems.forEach((item) => {
    const product = getProductDetails(item.id);
    if (!product) return;

    // Create HTML for each cart item
    const cartItemHTML = `
      <div class="checkout-product" data-id="${item.id}">
        <img src="${product.image}" alt="${
      product.title
    }" class="checkout-product-image"/>
        <p>${product.title}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Total Price: $${(product.price * item.quantity).toFixed(2)}</p>
      </div>
    `;

    finalProductContainer.insertAdjacentHTML("beforeend", cartItemHTML);
  });

  // Update total
  const total = cartItems.reduce((sum, item) => {
    const product = getProductDetails(item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const totalHTML = `
    <div class="checkout-total">
      <p>Total: $${total.toFixed(2)}</p>
    </div>
  `;
  finalProductContainer.insertAdjacentHTML("beforeend", totalHTML);
}

export async function renderCheckoutPage() {
  const root = document.getElementById("checkout-page"); // The root element
  if (root) {
    root.innerHTML = `
    <div class="checkout-container">
      <div class="payment-container">
        <div class="details-section">
          <p class="payment-title">Payment</p>
        <details class="details">
          <summary>Credit Card</summary>
          <div class="details-input">
            <!-- Card Number -->
            <div class="form-group">
              <label for="card-number"></label>
              <input 
                type="text" 
                id="card-number" 
                name="card-number" 
                placeholder="1234 5678 9012 3456" 
                inputmode="numeric" 
                pattern="\\d{4} \\d{4} \\d{4} \\d{4}" 
                maxlength="19" 
                required 
              />
            </div>

            <!-- Expiration Date and Security Code -->
            <div class="form-group">
              <label for="expiration-date"></label>
              <input 
                type="text" 
                id="expiration-date" 
                name="expiration-date" 
                placeholder="MM/YY" 
                pattern="(0[1-9]|1[0-2])/\\d{2}" 
                maxlength="4" 
                required 
              />
            </div>
            <div class="form-group">
              <label for="security-code"></label>
              <input 
                type="text" 
                id="security-code" 
                name="security-code" 
                placeholder="123" 
                pattern="\\d{3,4}" 
                maxlength="3" 
                required 
              />
            </div>

            <!-- Name on Card -->
            <div class="form-group">
              <label for="name-on-card"></label>
              <input 
                type="text" 
                id="name-on-card" 
                name="name-on-card" 
                placeholder="John Doe" 
                required 
              />
            </div>
          </div>
        </details>

        <details class="details details-paypal">
          <summary class="paypal-summary">
            Paypal <img src= "${paypalLogo}" class="paypal-logo" alt="" />
          </summary>
          <div class="paypal-icon"> <img src="${paypalIcon}" alt="" /></div>
          
          <p>
            After clicking "Pay with PayPal", you will be redirected to PayPal
            to complete your purchase securely.
          </p>
        </details>
      </div>
      <button class="pay-button">Pay now</button>
    </div>
    <div class="final-product-container"></div>
    </div>
    `;

    // Render cart items in the final product container
    renderCheckoutCart();
  } else {
    console.error("Root element not found!");
  }
}
