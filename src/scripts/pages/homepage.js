import {getProductsFromApi} from "../api/getProductsFromApi";
import image from "../../assets/visual_1.jpg";
import imageTwo from "../../assets/visual_2.jpg";

export async function renderHomepage() {
  const root = document.getElementById("homepage"); // The root element
  if (root) {
    root.innerHTML = `
        <div class="container">
          <div class="homepage-container">
            <div class="image-container">
              <img src="${image}" alt="" />
            </div> 
            
            <template id="productrow">
                <div class="product">
                    <img src="" alt="Product Image" />
                    <div class="product-info">
                    <p class="product-name" id="title">Product Name</p>
                    <p class="product-price" id="price">$65</p>
                    <p class="product-description" id="description">Description</p>
                    <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </template>
 
  
            <div class="newsletter-container">
              <div class="newsletter-image">
                <img
                  src="${imageTwo}"
                  alt="Background Image"
                  class="background-image"
                />
              </div>
              <div class="input-content">
                <h1>Subscribe for Exclusive News</h1>
                <div class="input-wrapper">
                  <input type="text" placeholder="Enter your email" />
                  <button>SIGN UP</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      `;
    getProductsFromApi("products");
  } else {
    console.error("Root element not found!");
  }
}