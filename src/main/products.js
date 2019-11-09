
const productsListContainer = `
<div class="container-fluid card-deck">
        ${PRODUCTS.map((product) => productCard(product))}
</div>.
`;

function productCard(product) {
    return `<div class="card" style="width: 18rem;">
    <img src="${product.imageURL}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      <a href="#" class="btn btn-primary">${product.price} zł</a>
    </div>
  </div>
    `
};

document.querySelector("main").innerHTML = productsListContainer;
