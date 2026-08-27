const isLoginPage = document.body?.classList.contains("login-page");
const savedUser = localStorage.getItem("nutrilifeUser");

if (!isLoginPage && !savedUser) {
    window.location.replace("login.html");
}

function signOut() {
    localStorage.removeItem("nutrilifeUser");
    window.location.replace("login.html");
}

if (!isLoginPage && savedUser) {
    window.addEventListener("DOMContentLoaded", () => {
        const nav = document.querySelector(".nav-links");
        if (!nav || document.getElementById("signOutLink")) return;
        const item = document.createElement("li");
        item.innerHTML = '<button id="signOutLink" class="sign-out" type="button">Sign out</button>';
        nav.appendChild(item);
        document.getElementById("signOutLink").addEventListener("click", signOut);
    });
}