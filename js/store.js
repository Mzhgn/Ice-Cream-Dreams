let allProducts = [
  {
    id: 1,
    title: "Caramel",
    price: 14,
    img: "images/caramel-ice.png",
    count: 1,
  },
  {
    id: 2,
    title: "Vanilla",
    price: 10,
    img: "images/vanilla.png",
    count: 1,
  },
  {
    id: 3,
    title: "Blue berry",
    price: 10,
    img: "images/blueberry.png",
    count: 1,
  },
  {
    id: 4,
    title: "Chocolate",
    price: 9,
    img: "images/chocolate.png",
    count: 1,
  },
  {
    id: 5,
    title: "Coconut",
    price: 11,
    img: "images/coconut.png",
    count: 1,
  },
  {
    id: 6,
    title: "Strawberry",
    price: 12,
    img: "images/strawberry.png",
    count: 1,
  },
  {
    id: 7,
    title: "Oreo",
    price: 11,
    img: "images/oreo.png",
    count: 1,
  },
  {
    id: 8,
    title: "Banana",
    price: 17,
    img: "images/Banana.png",
    count: 1,
  },
];

let $ = document;
let userBasket = [];
const shopItemContainer = $.querySelector(".shop-items");
const cartItemsRow = $.querySelector(".cart-items");
const purchaseBtn = $.querySelector("#purchase");
const totalPriceEl = $.querySelector(".cart-total-title");

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
  let productExists = userBasket.some((product) => {
    if (product.id === productId) {
      product.count++;
      return true;
    }
    return false;
  });
  if (!productExists) {
    let mainProduct = allProducts.find((product) => {
      return product.id === productId;
    });
    userBasket.push(mainProduct);
  }
  cartItemCreator(userBasket);
  calcCartValue(userBasket);
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
            <input class="cart-quantity-input" type="number" value=${product.count} onchange="updateItemCount(${product.id}, this.value)"  />
            <button class="btn btn-danger" type="button" onclick="removeCartRow(${product.id})">REMOVE</button>
          </div></div>`;

    cartItemsRow.insertAdjacentHTML("beforeend", basketEl);
  });
}

function removeCartRow(productId) {
  userBasket = userBasket.filter((product) => {
    return product.id !== productId;
  });
  cartItemCreator(userBasket);
  calcCartValue(userBasket);
}

purchaseBtn.addEventListener("click", () => {
  userBasket = [];
  cartItemCreator(userBasket);
  calcCartValue(userBasket);
});

function calcCartValue(userBasketArr) {
  let totalValue = 0;
  userBasketArr.forEach((product) => {
    totalValue += product.count * product.price;
  });

  totalPriceEl.textContent = `${totalValue}$`;
}

function updateItemCount(productId, countValue) {
  console.log(productId, countValue);
  userBasket.forEach((product) => {
    if (product.id === productId) {
      product.count = countValue;
    }
  });
  calcCartValue(userBasket);
}
