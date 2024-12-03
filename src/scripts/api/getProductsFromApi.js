import addToCart from "../cart/addToCart";
import { getData } from "./fetchFakeProducts";

export async function getProductsFromApi(endpoint) {
    const products = await getData(endpoint); // Fetch all products

    const productsSelector = document.querySelector("#products");
    productsSelector.innerHTML = ""; // Clear previous content

    // Loop through each product
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product";

        // Add product details
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-middle">
                <h5 class="product-title">${product.title}</h5>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
            <div class="product-footer">
                <div class="rating" data-rating="${product.rating.rate}"></div>
                <div class="icons">
                    <button class="add-to-cart" value="${product.id}" title="Add to Cart">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button class="add-to-favorites" title="Add to Favorites">
                        <i class="fas fa-heart"></i>
                    </button>                
                </div>
            </div>
        `;

        // Append the card to the container
        productsSelector.appendChild(productCard);

        // Generate stars for the rating
        const ratingContainer = productCard.querySelector(".rating");
        generateStars(ratingContainer, product.rating.rate);
    });
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