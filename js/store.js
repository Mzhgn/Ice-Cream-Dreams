let allProducts = [
  {
    id: 1,
    title: "Caramel",
    price: 14.2,
    img: "images/caramel-ice.png",
  },
  {
    id: 2,
    title: "Vanilla",
    price: 10.5,
    img: "images/vanilla.png",
  },
  {
    id: 3,
    title: "Blue berry",
    price: 10.28,
    img: "images/blueberry.png",
  },
  {
    id: 4,
    title: "Chocolate",
    price: 9.58,
    img: "images/chocolate.png",
  },
  {
    id: 5,
    title: "Coconut",
    price: 11.27,
    img: "images/coconut.png",
  },
  {
    id: 6,
    title: "Strawberry",
    price: 12.36,
    img: "images/strawberry.png",
  },
  {
    id: 7,
    title: "Oreo",
    price: 11.25,
    img: "images/oreo.png",
  },
  {
    id: 8,
    title: "Banana",
    price: 17.89,
    img: "images/Banana.png",
  },
];

let $ = document;
let userBasket = [];
const shopItemContainer = $.querySelector(".shop-items");
const cartItemsRow = $.querySelector(".cart-items");

allProducts.forEach((product) => {
  let shopItemEl = `<div class="shop-item"><span class="shop-item-title">${product.title}</span>
          <img class="shop-item-image" src="${product.img}" />
          <div class="shop-item-details">
            <span class="shop-item-price">${product.price} $</span>
            <button class="btn btn-primary shop-item-button" type="button" 
             onclick="addProductToBasket(${product.id})">
              ADD TO CART
            </button>
          </div></div>`;

  shopItemContainer.insertAdjacentHTML("beforeend", shopItemEl);
});

function addProductToBasket(productId) {
  let mainProduct = allProducts.find(function (product) {
    return product.id === productId;
  });
  userBasket.push(mainProduct);
  cartItemCreator(userBasket);
}

function cartItemCreator(cartArray) {
  cartItemsRow.innerHTML = " ";
  cartArray.forEach((product) => {
    let basketEl = `<div class="cart-row"><div class="cart-item cart-column">
            <img
              class="cart-item-image"
              src="${product.img}"
              width="100"
              height="100"
            />
            <span class="cart-item-title">${product.title}</span>
          </div>
          <span class="cart-price cart-column">${product.price} $</span>
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" />
            <button class="btn btn-danger" type="button" onclick="removeCartRow(${product.id})">REMOVE</button>
          </div></div>`;

    cartItemsRow.insertAdjacentHTML("afterbegin", basketEl);

    // console.log(basketEl);
  });
}

function removeCartRow(productId) {
  userBasket = userBasket.filter((product) => {
    return product.id !== productId;
  });
  cartItemCreator(userBasket);
}
