import { removeModal } from "./utils/modals.js";
import { postData } from "./utils/httpReq.js";

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
  console.log(response);
};

loginButton.addEventListener("click", submitHandler);
modalButton.addEventListener("click", removeModal);