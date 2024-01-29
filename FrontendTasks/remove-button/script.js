let products = [
  {
    id: "1",
    item: "Shirt",
  },
  {
    id: "2",
    item: "Jeans",
  },
  {
    id: "3",
    item: "T-shirt",
  },
  {
    id: "4",
    item: "Denim Jacket",
  },
  {
    id: "5",
    item: "Casual Shoes",
  },
];

let appContainer = document.getElementById("app");

function showProducts(products) {
  for (let product of products) {
    let itemsContainer = document.createElement("div");
    let label = document.createElement("span");
    label.innerText = product.item;

    let button = document.createElement("button");
    button.setAttribute("data-ID", product.id);
    button.innerText = "Remove";

    itemsContainer.appendChild(label);
    itemsContainer.appendChild(button);
    appContainer.appendChild(itemsContainer);
  }
}

showProducts(products);

appContainer.addEventListener("click", (event) => {
  let itemId = event.target.dataset.id;
  products = products.filter((product) => product.id !== itemId);
  appContainer.innerHTML = "";
  showProducts(products);
});
