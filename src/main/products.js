
const productsListContainer = `
<div class="container-fluid card-deck">
        ${PRODUCTS.map((product) => productCard(product))}
</div>.
`;
//dekon
function productCard({name, description, imageURL, id, price}) {
    return `<div class="card" style="width: 18rem;">
    <img src="${imageURL}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <button class="btn btn-primary" onclick="Cart.addItem('${id}', '${name}', ${price})">
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

