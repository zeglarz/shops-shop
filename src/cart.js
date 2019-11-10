

const cartButtonTemplate = `

<style>
    .cart-button {
        position: fixed;
        bottom: 40px;
        right: 40px;
        height: 80px;
        width: 80px;
        border-radius: 100%;
    }
</style>

<button type="button" class="cart-button btn btn-secondary btn-lg" data-toggle="modal" data-target="#cart-modal"><img src="src/images/cart.svg"/></button>

`;

$('body').append(cartButtonTemplate);

const cartModalTemplate = `
<!-- Modal -->
<div class="modal fade" id="cart-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Cart</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="cart-items-modal-body" class="modal-body">
      <!-- dynamic card -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`;

const cartItemTemplate = ({
  imageURL,
  productName,
  productPrice,
  productId,
  quantity
}) => `
  <li class="list-group-item">
    Produkt: ${productName}<br> Cena: ${productPrice}<br> ilość: ${quantity} <br>
    <button onclick="Cart.removeItem('${productId}')" type="button" class="btn btn-secondary"> remove </button>
  </li>
  `

const renderCartModal = () => {

  const modal = document.getElementById('cart-modal');
  if (!modal) {
    $('body').append(cartModalTemplate);

  } else {
    const modalBody = document.getElementById('cart-items-modal-body');
    modalBody.innerHTML = `
  <ul class="list-group list-group-flush">
    ${Object.values(CartItems).map((cartItem) => cartItemTemplate(cartItem)).join(Cart.items)}
  </ul>
  `
  }
};



CartItems = {};

Cart = {
  items: [],
  addItem: (productId, productName, productPrice) => {
    if (!CartItems[productId]) {
      CartItems[productId] = {
        productId,
        productPrice,
        productName,
        quantity: 1
      };
    } else {
      CartItems[productId]["quantity"] += 1; // lub   CartItems[productId].quantity 
    }
    console.log(productId, productName, productPrice);
  
    renderCartModal();
    console.log(CartItems);
  }, 
  removeItem: (productId) => {

    delete CartItems[productId];
    renderCartModal();
  }
}
renderCartModal();