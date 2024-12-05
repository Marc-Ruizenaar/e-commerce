import {getData} from "../api/fetchFakeProducts"; // Import the getData function
import image from "../../assets/visual_1.jpg";
import imageTwo from "../../assets/visual_2.jpg";

export async function renderHomepage() {
  const root = document.getElementById("homepage"); // The root element

  if (root) {
    // Initial HTML structure
    root.innerHTML = `

        <div class="homepage-container">
          <!-- First Image Section -->
          <div class="image-container">
            <img src="${image}" alt="First Visual" />
          </div>

          <!-- Product Section -->
           <div class="homepage-product-section">
              <div class="shop-all-container"><h1>SHOP ALL</h1></div>
       
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
               <div> <h1>Subscribe for Exclusive News</h1>  </div>
              <div class="input-wrapper">
                <input type="text" placeholder="Enter your email" />
                <button>SIGN UP</button>
              </div>
            </div>
          </div>
        </div>

    `;

    try {
      // Fetch products from the API using getData
      const products = await getData("products"); // 'products' is the URL option

      // Get the product container
      const productContainer = document.getElementById(
        "homepage-products-container"
      );

      // Display only two products
      if (products && Array.isArray(products)) {
        const selectedProducts = products.slice(0, 2); // Limit to the first two products

        productContainer.innerHTML = selectedProducts
          .map(
            (product) => `
             
      
  
            <div class="homepage-products-card">
                <img class="homepage-products-image" src="${product.image}" alt="${product.title}" />
                <div class="products-card-details">
                <p class="homepage-products.title">${product.title}</p>
                <p class="homepage-products-price">$${product.price}</p> 
                <p class="homepage-products-rating">$${product.price}</p> 
                     <button class="add-to-cart-button"> ADD TO CART</button>
              </div>

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

  // Function to create star elements based on the rating
  function generateStars(container, rating) {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 >= 0.5; // Half star if rating is not a whole number
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining stars

    // Append full stars
    for (let i = 0; i < fullStars; i++) {
      container.innerHTML += `<i class="fas fa-star"></i>`;
    }

    // Append half star
    if (halfStar) {
      container.innerHTML += `<i class="fas fa-star-half-alt"></i>`;
    }

    // Append empty stars
    for (let i = 0; i < emptyStars; i++) {
      container.innerHTML += `<i class="far fa-star"></i>`;
    }
  }
  generateStars();
}
