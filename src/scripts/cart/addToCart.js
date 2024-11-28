export default function addToCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const addToCartButtonSelector = document.querySelectorAll("#addToCart");

    // Foreach button gets the id
    addToCartButtonSelector.forEach(button => {
        button.addEventListener("click", () => {

            const productID = button.value;

            const existingProductIndex = cartItems.findIndex(item => item.id === productID);
            console.log(cartItems);

            if (existingProductIndex !== -1) {
                // If product exists, increment its quantity
                cartItems[existingProductIndex].quantity += 1;
            } else {
                // If product doesn't exist, add new product to cart
                const productToAdd = {
                    id: productID,
                    quantity: 1
                };


                cartItems.push(productToAdd);

            }
            updateCartInLocalStorage(cartItems);

        });

    });

    function updateCartInLocalStorage(items) {
        localStorage.setItem('cartItems', JSON.stringify(items));
    }

}
