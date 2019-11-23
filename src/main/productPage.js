function loadProductPage(productId) {

    Api.getProduct(productId)
        .catch((error) => {
            document.querySelector('main').innerHTML = `
  <h1 class="text-center" style="color: red">BŁĄD</h1>
  <h2 class="text-center">${error.message}</h2>
  `
            throw error;
        })
        .then((response) => {
            const {imageURL, name, description} = response;
            const productContainer = `
<div class="container-fluid card-deck">
        <h1 class="text-center">${name}</h1>
         <img src="${imageURL}" class="card-img-top" alt="...">
        <p>${description}</p>
</div>
`;

            document.querySelector("main").innerHTML = productContainer;

        });
}