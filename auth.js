import { removeModal } from "./utils/modals.js";
import { postData } from "./utils/httpReq.js";
import { setCookie } from "./utils/cookie.js";
import authHandler from "./utils/authorization.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");
const modalButton = document.getElementById("modal-button");

// Send information to the server and get the token
const submitHandler = async (event) => {
  event.preventDefault();
  const username = inputBox[0].value;
  const password = inputBox[1].value;

  const response = await postData("auth/login", {
    username,
    password,
  });

  // Save token in cookie
  setCookie(response.token);
  location.assign("index.html");
};



loginButton.addEventListener("click", submitHandler);
modalButton.addEventListener("click", removeModal);
document.addEventListener("DOMContentLoaded", authHandler);
