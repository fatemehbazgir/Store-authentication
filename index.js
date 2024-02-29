import { getCookie } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";
import { shortenText } from "./utils/stringFunc.js";

let allProducts = null;

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");
const mainContent = document.getElementById("products");
const searchButton = document.querySelector("button");
const inputBox = document.querySelector("input");

// Showing products on the site
const showProduct = (products) => {
  mainContent.innerHTML = "";

  products.forEach((product) => {
    const jsx = `
    <div>
    <img src=${product.image} alt=${product.title} />
    <h4>${shortenText(product.title)}</h4>
    <div id="price">
    <p>$ ${product.price}</p>
    <button>
    Buy
    <i class="fa-solid fa-cart-shopping"></i>
    </button>
    </div>
    <div id="rate">
    <i class="fa-solid fa-star"></i>
    <span>${product.rating.rate}</span>
    </div>
    <div id="count">
    <i class="fa-solid fa-user"></i>
    <span>${product.rating.count}</span>
    </div>
    </div>
    `;

    mainContent.innerHTML += jsx;
  });
};

// Show login and dashboard buttons based on user status
const init = async () => {
  const cookie = getCookie();

  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashboardButton.style.display = "none";
  }

  allProducts = await getData("products");
  showProduct(allProducts);
};

// Ability to search products
const searchHandler = () => {
  const query = inputBox.value.trim().toLowerCase();

  if (!query) return showProduct(allProducts);
  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query)
  );

  showProduct(filteredProducts);
};

document.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("click", searchHandler);
