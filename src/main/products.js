
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
      <button class="btn btn-primary" onclick="Cart.addItem('${product.id}', '${product.name}', ${product.price})">
      dodaj do koszyka
      </button>
    <button class="btn btn-secondary">Zobacz więcej</button>
    </div>
  </div>
    `
};

document.querySelector("main").innerHTML = productsListContainer;

/*
var carusel = {`
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    ${` <div class="carousel-item">
    <img src="..." class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="..." class="d-block w-100" alt="...">
  </div>
</div>`
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
`}
*/

CartItems = {};

Cart = {
    items: [],
    addItem: (productId, productName, productPrice) => {
        console.log(productId, productName, productPrice);
        renderCartModal();
        CartItems[productId] = {productPrice, productName};

        console.log(CartItems);
}
}