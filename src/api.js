Api = {
    getProducts: () => fetch(`${BACKEND_HOST_URL}${PRODUCTS_ROUTE_PATH}`).then((response)=> response.json()),
    getProduct:  () => {},
    createProduct: () => {},
    updateProduct: () => {},
    deleteProduct: () => {},
    createOrder: () => {},
}