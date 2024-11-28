import "./style.css";
import {getData} from "./scripts/api/fetchFakeProducts";
import {productPage} from "./scripts/componants/productpage";
 
async function initializeProducts() {
    // Fetch the data
    const json = await getData();
    
    // Only call productPage after data is fetched
    if (json) {
        productPage(json);
    }
}

initializeProducts();