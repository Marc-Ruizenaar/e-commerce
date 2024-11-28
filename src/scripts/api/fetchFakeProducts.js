export async function getData(json) {
    const url = "https://fakestoreapi.com/products";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error(error.message);
    }

    
}
