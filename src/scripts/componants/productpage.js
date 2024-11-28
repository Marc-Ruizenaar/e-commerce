export async function productPage(json) {

    for (let index = 0; index < 20; index++) {

        if ("content" in document.createElement("template")) {

            const products = document.querySelector("#products");
            const template = document.querySelector("#productrow");

            const clone = template.content.cloneNode(true);

            let title = clone.querySelector("#title");
            title.textContent = json[index].title;

            let description = clone.querySelector("#description");
            description.textContent = json[index].description;

            let price = clone.querySelector("#price");
            price.textContent = json[index].price;

            products.appendChild(clone);
        }
    }

}

productPage();