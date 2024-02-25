import { showModal } from "./modals.js";

const BASE_URL = "https://fakestoreapi.com";

// Sending information to the server and getting a token for user registration
const postData = async (path, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    showModal("An error occurred!");
  }
};

// Getting product information from api
const getData = async (path) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`);
    const json = await response.json();
    return json;
  } catch (error) {
    showModal("An error occurred!");
  }
};

export { postData, getData };
