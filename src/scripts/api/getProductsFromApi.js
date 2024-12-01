import addToCart from "../cart/addToCart";
import { getData } from "./fetchFakeProducts";

export async function getProductsFromApi(products) {
  const json = await getData(products);

  console.log(json);

  const productsSelector = document.querySelector("#products");
  productsSelector.innerHTML = "";

  for (let index = 0; index < json.length; index++) {
    if ("content" in document.createElement("template")) {
      const template = document.querySelector("#productrow");

      const clone = template.content.cloneNode(true);

      const title = clone.querySelector("#title");
      title.textContent = json[index].title;

      const description = clone.querySelector("#description");
      description.textContent = json[index].description;

      const price = clone.querySelector("#price");
      price.textContent = json[index].price;

      const button = clone.querySelector("button");
      button.value = json[index].id;

      productsSelector.appendChild(clone);
    }
  }

  // Run add to cart button
  addToCart();
}
