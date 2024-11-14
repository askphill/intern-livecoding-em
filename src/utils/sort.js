import products from "../data/products";
import displayProducts from "./display";

export default (event) => {
  const { value: sortOption } = event.target;
  let sortedProducts;

  if (sortOption === "priceAsc") {
    sortedProducts = [...products].sort(
      (a, b) => a.price.amount - b.price.amount
    );
  } else if (sortOption === "priceDesc") {
    sortedProducts = [...products].sort(
      (a, b) => b.price.amount - a.price.amount
    );
  } else {
    sortedProducts = products;
  }

  displayProducts(sortedProducts);
};
