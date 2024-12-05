import paypalIcon from "../../assets/img/paypal_icon.svg";
import paypalLogo from "../../assets/img/paypal-logo.png";

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
        pattern="\d{4} \d{4} \d{4} \d{4}" 
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
        pattern="(0[1-9]|1[0-2])\/\d{2}" 
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
        pattern="\d{3,4}" 
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
      <div class="final-product-container">
        <div>
          <img src="https://placehold.co/64x64" alt="" />
          <p>Ashtray set</p>
        </div>
        <div>
          <input type="text" placeholder="Discount code or gift card" />
          <button>Apply</button>
        </div>
        <div>
          <p>Subtotal</p>
          <p>74</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>Enter shipping address</p>
        </div>
        <div>
          <p>Total</p>
          <p>74</p>
        </div>
      </div>
    </div>
      `;
  } else {
    console.error("Root element not found!");
  }
}
