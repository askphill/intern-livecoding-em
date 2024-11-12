import products from "./data/products";
import displayProducts from "./utils/display";
import handleSort from "./utils/sort";

/* Start JS */
const initialize = () => {
  const sortSelectElement = document.querySelector("#sortSelect");

  // TODO: Include an event listener for changes in sortSelectElement here, to handle the sorting products by price.
  sortSelectElement.addEventListener("change", handleSort);

  // Display products
  displayProducts(products);
};

document.addEventListener("DOMContentLoaded", initialize);
