import {getData} from "../api/fetchFakeProducts"; // Import the getData function
import image from "../../assets/visual_1.jpg";
import imageTwo from "../../assets/visual_2.jpg";

export async function renderHomepage() {
  const root = document.getElementById("homepage"); // The root element

  if (root) {
    // Initial HTML structure
    root.innerHTML = `
      <div class="container">
        <div class="homepage-container">
          <!-- First Image Section -->
          <div class="image-container">
            <img src="${image}" alt="First Visual" />
          </div>

          <!-- Product Section -->
          <div class="product" id="product-container">
            <!-- Products will be dynamically inserted here -->
          </div>

          <!-- Newsletter Section -->
          <div class="newsletter-container">
            <div class="newsletter-image">
              <img
                src="${imageTwo}"
                alt="Newsletter Background"
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

    try {
      // Fetch products from the API using getData
      const products = await getData("products"); // 'products' is the URL option

      // Get the product container
      const productContainer = document.getElementById("product-container");

      // Display only two products
      if (products && Array.isArray(products)) {
        const selectedProducts = products.slice(0, 2); // Limit to the first two products

        productContainer.innerHTML = selectedProducts
          .map(
            (product) => `
              <div class="product-card">
                <img src="${product.image}" alt="${product.title}" />
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <span>$${product.price}</span>
              </div>
            `
          )
          .join(""); // Join the HTML strings for the two products
      } else {
        productContainer.innerHTML = `<p>No products found.</p>`;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  } else {
    console.error("Root element not found!");
  }
}
