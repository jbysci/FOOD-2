const isLoginPage = document.body?.classList.contains("login-page");
const savedUser = localStorage.getItem("nutrilifeUser");

function saveSessionUser(email) {
    const safeEmail = (email || "").trim().toLowerCase();
    if (!safeEmail) return;
    localStorage.setItem("nutrilifeUser", safeEmail);
    sessionStorage.setItem("nutrilifeSession", JSON.stringify({
        email: safeEmail,
        provider: "google",
        timestamp: new Date().toISOString()
    }));
}

if (!isLoginPage && !savedUser) {
    window.location.replace("login.html");
}

function signOut() {
    localStorage.removeItem("nutrilifeUser");
    sessionStorage.removeItem("nutrilifeSession");
    window.location.replace("login.html");
}

if (!isLoginPage && savedUser) {
    window.addEventListener("DOMContentLoaded", () => {
        const nav = document.querySelector(".nav-links");
        if (!nav || document.getElementById("signOutLink")) return;
        const item = document.createElement("li");
        item.innerHTML = '<button id="signOutLink" class="sign-out" type="button" aria-label="Sign out of NutriLife">Sign out</button>';
        nav.appendChild(item);
        document.getElementById("signOutLink").addEventListener("click", signOut);
    });
}