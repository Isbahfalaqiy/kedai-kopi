// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika humburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilnagkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("active", function (e) {
  if (!hamburger.contanins(e.target) && !navbarNav.contanins(e.target)) {
    navbar - NavigationPreloadManager.classList.remove("active");
  }
});
