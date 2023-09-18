const modifyBtn = document.querySelector(".modify__btn");

export const Logout = (tokenKey, idKey) => {
    const headerLoginButton = document.querySelector("#login-btn");
    headerLoginButton.innerText = "logout";
    headerLoginButton.href="#";

    headerLoginButton.addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.removeItem(tokenKey),
        sessionStorage.removeItem(idKey),
        headerLoginButton.innerText = "login";
        headerLoginButton.href="./login.html";
        modifyBtn.style.display = "none"
        window.location.href = "./index.html";
    })
}