export default (listOfProductsToDisplay) => {
  const productGrid = document.querySelector("#productGrid");

  /* Remove any existing content in Product Grid */
  productGrid.innerHTML = "";

  /* Check for product values */
  if (listOfProductsToDisplay.length === 0) {
    document.querySelector("#noResults").classList.remove("hidden");
    return;
  } else {
    document.querySelector("#noResults").classList.add("hidden");
  }

  /* Product Cards */
  listOfProductsToDisplay.forEach((product) => {
    // Cloning the template for each product card to create a consistent structure and add styling.
    const template = document.querySelector("#productTemplate");
    const productCard = template.content.cloneNode(true);

    // Title & price
    const titleElement = productCard.querySelector("h3");
    titleElement.textContent = product.title;

    const priceElement = productCard.querySelector(".price");
    priceElement.textContent = `€${product.price.amount.toFixed(2)}`;

    // Image
    const imageElement = productCard.querySelector("img");
    if (imageElement) {
      imageElement.src = product.image;
      imageElement.alt = `${product.title} image`;
    }

    // Colors
    const colorsList = productCard.querySelector("#colors-list");
    colorsList.innerHTML = "";

    product.variants.forEach((variant) => {
      const colorItem = document.createElement("li");
      colorItem.classList.add("flex", "items-center");

      // swatch
      const colorSwatch = document.createElement("span");
      colorSwatch.classList.add(
        "w-4",
        "h-4",
        "rounded-full",
        "mr-2",
        "border",
        "border-black"
      );
      colorSwatch.style.backgroundColor = variant.hex;

      // name
      const colorName = document.createElement("span");
      colorName.classList.add("text-xs");
      colorName.textContent = variant.color;

      colorItem.appendChild(colorSwatch);
      colorItem.appendChild(colorName);
      colorsList.appendChild(colorItem);
    });

    productGrid.appendChild(productCard);
  });
};
