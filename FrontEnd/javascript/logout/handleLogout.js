

export const handleLogout = (tokenKey, idKey, headerLoginButton, modifyBtn) => {
   
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