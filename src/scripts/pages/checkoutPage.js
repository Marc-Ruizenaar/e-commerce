import image from "../../assets/visual_1.jpg";
import imageTwo from "../../assets/visual_2.jpg";

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
              <input type="number" / placeholder="Card number">
              <div>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Expiration date (MM/YY)"
                  pattern="(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])"
                  required
                  maxlength="5"
                />
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Security code"
                />
              </div>
              <input type="text" name="" id="" placeholder="Name on card" />
            </div>
          </details>
          <details class="details details-paypal">
            <summary>
              Paypal <img src="assets/images/PayPal-logo.png" alt="" />
            </summary>
            <img src="assets/images/paypal_icon.svg" alt="" />
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
          <p>Shipping address</p>
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
