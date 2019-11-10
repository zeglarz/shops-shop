const onHashChange = () => {

    const { hash } = location;

    if (!hash) {
        loadProductsPage();
    }


if (location.hash.includes('/product/')) {
    loadProductPage(hash.split('/'). pop());
}

};

window.addEventListener("hashchange", onHashChange, false);
onHashChange();