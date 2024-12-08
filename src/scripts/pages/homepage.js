import {getData} from "../api/fetchFakeProducts";
import image from "../../assets/visual_1.jpg";
import imageTwo from "../../assets/visual_2.jpg";

export async function renderHomepage() {
  const root = document.getElementById("homepage"); // The root element

  if (root) {
    root.innerHTML = `
      <div class="homepage-container">
        <!-- First Image Section -->
        <div class="image-container">
          <img src="${image}" alt="First Visual" />
        </div>

        <!-- Product Section -->
        <div class="homepage-product-section">
          <div class="shop-all-container">
            <h1><a href="#" id="shop-all-btn" data-category="allproducts">SHOP ALL</a></h1>
          </div>
          <div class="product" id="homepage-products-container">
            <!-- Products will be dynamically inserted here -->
          </div>
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
            <div><h1>Subscribe for Exclusive News</h1></div>
            <div class="input-wrapper">
              <input type="text" placeholder="Enter your email" />
              <button>SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Fetch and display initial products
    try {
      const products = await getData("products");

      const productContainer = document.getElementById(
        "homepage-products-container"
      );

      if (products && Array.isArray(products)) {
        const selectedProducts = products.slice(0, 2); // Show only two products

        productContainer.innerHTML = selectedProducts
          .map(
            (product) => `
            <div class="homepage-products-card">
              <div class="product-image-container">
                <img class="homepage-products-image" src="${
                  product.image
                }" alt="${product.title}" />
              </div>
              <div class="products-card-details">
                <p class="homepage-products-title">${product.title}</p>
                <p class="homepage-products-price">$${product.price}</p>
                <div class="homepage-products-rating">
                  ${generateStarsHTML(product.rating.rate)}
                </div>
                <button class="add-to-cart-button"> ADD TO CART</button>
              </div>
            </div>
          `
          )
          .join("");
      } else {
        productContainer.innerHTML = `<p>No products found.</p>`;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }

    // SHOP ALL Navigation
    const shopAllBtn = document.getElementById("shop-all-btn");
    shopAllBtn.addEventListener("click", async (event) => {
      event.preventDefault(); // Prevent default link behavior
      const productCategory = shopAllBtn.dataset.category;

      const productUrl =
        productCategory === "allproducts"
          ? "products"
          : `products/category/${productCategory}`;

      try {
        const products = await getData(productUrl);

        const productContainer = document.getElementById(
          "homepage-products-container"
        );

        if (products && Array.isArray(products)) {
          productContainer.innerHTML = products
            .map(
              (product) => `
              <div class="homepage-products-card">
                <div class="product-image-container">
                  <img class="homepage-products-image" src="${
                    product.image
                  }" alt="${product.title}" />
                </div>
                <div class="products-card-details">
                  <p class="homepage-products-title">${product.title}</p>
                  <p class="homepage-products-price">$${product.price}</p>
                  <div class="homepage-products-rating">
                    ${generateStarsHTML(product.rating.rate)}
                  </div>
                  <button class="add-to-cart-button"> ADD TO CART</button>
                </div>
              </div>
            `
            )
            .join("");
        } else {
          productContainer.innerHTML = `<p>No products found.</p>`;
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    });
  } else {
    console.error("Root element not found!");
  }

  // Generate stars HTML for product ratings
  function generateStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      "★".repeat(fullStars) + (halfStar ? "☆" : "") + "✩".repeat(emptyStars)
    );
  }
}
