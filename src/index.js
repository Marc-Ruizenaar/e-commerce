import "./styles/footer.css";
import "./styles/header.css";
import "./styles/style.css";
import "./styles/products-style.css";
import "./styles/categories-style.css";
import "./styles/homepage-style.css";
import { getData } from "./scripts/api/fetchFakeProducts";
import { productPage } from "./scripts/pages/productpage";
import { categoriePage } from "./scripts/pages/categoriePage";
import { renderHomepage } from "./scripts/pages/homepage";
import { header } from "./scripts/header/headercomponant";

header();

// Product page
//productPage();

// Categorie page
categoriePage();

renderHomepage();
