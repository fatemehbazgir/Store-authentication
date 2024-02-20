import { showModal } from "./modals.js";

const validateUsername = (username) => {
  const regex = /^[a-zA-Z\d_]{4,16}$/;
  const result = regex.test(username);
  return result;
};

const validatePassword = (password) => {
  const regex = /^.{6,20}$/;
  const result = regex.test(password);
  return result;
};

//Registration form validation
const validateForm = (username, password) => {
  const usernameResult = validateUsername(username);
  const passwordResult = validatePassword(password);

  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult && !passwordResult) {
    showModal("Username and Password is not valid!");
  } else if (!usernameResult) {
    showModal("Username is not valid!");
  } else if (!passwordResult) {
    showModal("Please enter a password between 6 and 20 characters");
  }
};

export { validateForm };
