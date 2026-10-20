// * HEADER HAMBURGER MENU
const menuButton = document.querySelector("body>header>button");
const menuCloseButton = document.querySelector("body>header>nav>button");
const navMenu = document.querySelector("body>header>nav");

menuButton.addEventListener("click", openMenu);
menuCloseButton.addEventListener("click", closeMenu);

function openMenu() {
    navMenu.classList.add("openNavMenu");
}

function closeMenu() {
    navMenu.classList.remove("openNavMenu");
}
