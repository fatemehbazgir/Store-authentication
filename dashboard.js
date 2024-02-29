import authHandler from "./utils/authorization.js";
import { getData } from "./utils/httpReq.js";

const mainContent = document.getElementById("container");

const renderUsers = () => {
  mainContent.innerHTML = "";
};

const init = async () => {
  authHandler();

  // Getting user information
  const users = await getData("users");
  renderUsers(users);
};

document.addEventListener("DOMContentLoaded", init);
