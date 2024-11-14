import products from "./data/products";
import displayProducts from "./utils/display";
import handleSort from "./utils/sort";

const initialize = () => {
  const sortSelectElement = document.querySelector("#sortSelect");

  // TODO: Include an event listener that will listen for changes in sortSelectElement. It needs to be able to handle the sorting products by price.
  // add your code here...

  displayProducts(products);
};

document.addEventListener("DOMContentLoaded", initialize);





