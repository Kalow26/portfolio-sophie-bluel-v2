import { login } from "../api/api.js";
import { validateForm } from "./validateForm.js";


const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
const loginForm = document.querySelector("#login-form");

const logUser = async (e) => {
  e.preventDefault();

  const user = {
    email: email.value,
    password: password.value,
  };

  const checkUserEmail = validateForm(
    email,
    document.querySelector(".alert-mail"),
    "Merci d'entrer votre Email"
  );
  const checkUserPassword = validateForm(
    password,
    document.querySelector(".alert-password"),
    "Merci d'entrer votre Mot de passe"
  );

  if (checkUserPassword && checkUserEmail) {
    const userData = await login(user);
    if (userData.token) {
      sessionStorage.setItem("token", userData.token);
      sessionStorage.setItem("id", userData.userId);
      window.location.href = "../index.html";
    } else {
      document.querySelector(
        ".alert-connection"
      ).innerHTML = `erreur de connection : ${
        userData.message === undefined
          ? "Mot de passe incorrect"
          : userData.message
      }`;
    }
  } else {
    document.querySelector(".alert-connection").innerHTML =
      "erreur saisie données";
  }
};

loginForm.addEventListener("submit", (e) => logUser(e));
