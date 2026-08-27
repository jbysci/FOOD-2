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
document.addEventListener("DOMContentLoaded", () => {
    const settingsButton = document.getElementById("settings-toggle");
    if (!settingsButton) return;

    const panel = document.createElement("div");
    panel.id = "settings-panel";
    panel.className = "settings-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Settings");
    panel.hidden = true;
    panel.innerHTML = "<strong>Settings</strong><p>NutriLife is using light mode.</p>";
    document.body.appendChild(panel);

    settingsButton.addEventListener("click", () => {
        panel.hidden = !panel.hidden;
        settingsButton.setAttribute("aria-expanded", String(!panel.hidden));
    });
});