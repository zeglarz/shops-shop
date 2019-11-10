Api = {
    getProducts: () => fetch('${BACKEND_HOST_RUL}${PRODUCTS_ROUTE_PATH}').then((response)=>console.log(response)),
    getProduct:  () => {},
    createProduct: () => {},
    updateProduct: () => {},
    deleteProduct: () => {},
    createOrder: () => {},
}