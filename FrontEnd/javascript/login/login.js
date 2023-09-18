import {login} from '../api/api.js'


const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
const loginForm = document.querySelector("#login-form");


const logUser = async (e) => {
    e.preventDefault();
    const user = {
        email: email.value,
        password: password.value,
    }
    const userData = await login(user); 
    sessionStorage.setItem("token", userData.token)
    sessionStorage.setItem("id", userData.userId)


    window.location.href = "../../FrontEnd/index.html"

}

loginForm.addEventListener("submit", (e)  => logUser(e))





