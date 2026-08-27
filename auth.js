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
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  
  if (!toggleBtn) return;

  // Load saved preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-theme');
    toggleBtn.innerText = '☀️ Light Mode';
  }

  // Toggle theme on click
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkMode', isDark);
    toggleBtn.innerText = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
});