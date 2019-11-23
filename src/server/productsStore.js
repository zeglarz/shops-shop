const fs = require('fs');
const PRODUCTS_FILE_NAME = 'products.json';

const getProducts = () => require(`./${PRODUCTS_FILE_NAME}`);

const getProductById = (id) => getProducts().find((product) => product.id === id);

const deleteProductById = (id, callback) => {
    const products = getProducts();
    const filteredProducts = products.filter((product) => product.id !== id);
    console.log(filteredProducts);
    fs.copyFile(PRODUCTS_FILE_NAME, `${PRODUCTS_FILE_NAME}.backup`, (err) => {
        if (err) throw err;

        fs.writeFile(PRODUCTS_FILE_NAME, JSON.stringify(filteredProducts, 0, 4), (err) => {
            if (err) throw err;
            callback();
        });
    });


};
module.exports = { getProducts, getProductById, deleteProductById };

