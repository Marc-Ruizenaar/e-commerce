import { getData } from "../api/fetchFakeProducts";
import { getProductsFromApi } from "../api/getProductsFromApi";

export async function productPage() {

    getProductsFromApi("products");

}
