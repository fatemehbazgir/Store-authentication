import { getCookie } from "./utils/cookie.js";

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");



// Show login and dashboard buttons based on user status
const init = () => {
  const cookie = getCookie();

  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashboardButton.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", init);
