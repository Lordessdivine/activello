const mobileBtn = document.getElementById("btn");
const primaryNav = document.getElementById("primary-nav");

function toggleMobileMenu() {
  primaryNav.classList.toggle("mobile");
}

mobileBtn.addEventListener("click", toggleMobileMenu);
