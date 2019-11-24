const productsApiRoute = `${BACKEND_HOST_URL}${PRODUCTS_ROUTE_PATH}`;

Api = {
    getProducts: () => fetch(productsApiRoute).then((response) => response.json()),
    getProduct: (id) => {
        return fetch(`${productsApiRoute}/${id}`).then((response) => response.json())
    },
    createProduct: (formData) => {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify(formData)
        };
        return fetch(productsApiRoute);
    },

    updateProduct: () => {},

    deleteProduct: (id) => {
        return fetch(`${productsApiRoute}/${id}`, {method: 'DELETE'})
            .then((response)=> response.json());
    },
    createOrder: () => {},
}