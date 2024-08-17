let allProducts = [
  {
    id: 1,
    title: "icecream Caramel",
    price: 14.2,
    img: "images/caramel-ice.png",
  },
  {
    id: 2,
    title: "icecream Banana",
    price: 17.89,
    img: "images/Banana.png",
  },
  {
    id: 3,
    title: "icecream blue berry",
    price: 10.28,
    img: "images/blueberry.png",
  },
  {
    id: 4,
    title: "icecream chocolate",
    price: 9.58,
    img: "images/chocolate.png",
  },
  {
    id: 5,
    title: "icecream coconut",
    price: 11.27,
    img: "images/coconut.png",
  },
  {
    id: 6,
    title: "icecream Strawberry",
    price: 12.36,
    img: "images/strawberry.png",
  },
  {
    id: 7,
    title: "icecream oreo",
    price: 11.25,
    img: "images/oreo.png",
  },
  {
    id: 1,
    title: "icecream vanilla",
    price: 10.5,
    img: "images/vanilla.png",
  },
];

let $ = document;
const shopItemContainer = $.querySelector(".shop-item");

allProducts.forEach((product) => {
  let shopItemEl = `<div class="shop-item">
          <span class="shop-item-title">${product.title}</span>
          <img class="shop-item-image" src="${product.img}" />
          <div class="shop-item-details">
            <span class="shop-item-price">${product.price} $</span>
            <button class="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>`;

  shopItemContainer.insertAdjacentHTML("beforeend", shopItemEl);
});
