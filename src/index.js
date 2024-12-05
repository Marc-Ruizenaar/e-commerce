import "./styles/footer.css";
import "./styles/header.css";
import "./styles/style.css";
import "./styles/products-style.css";
import "./styles/categories-style.css";
import "./styles/homepage-style.css";
import "./styles/cart.css";
import { getData } from "./scripts/api/fetchFakeProducts";
import { productPage } from "./scripts/pages/productpage";
import { categoriePage } from "./scripts/pages/categoriePage";
import { renderHomepage } from "./scripts/pages/homepage";
import { header } from "./scripts/header/headercomponant";
import { cartDisplay } from "./scripts/cart/cart.js";
import { addToCart } from "./scripts/cart/addToCart.js";
// import { renderCartItems } from "./scripts/cart/renderCartItems.js";
import { renderCheckoutPage } from "./scripts/pages/checkoutPage";
import { footer } from "./scripts/pages/footer";
header();
cartDisplay();

// Product page
//productPage();

// Categorie page
categoriePage();

renderHomepage();
// renderCartItems();
renderCheckoutPage();
footer();
