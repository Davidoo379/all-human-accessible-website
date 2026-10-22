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

// * CARD FLIPPER
const cardFront = document.querySelector("body main>section article>div.card-front");
const cardBack = document.querySelector("body main>section article>div.card-back");
const cardButton = document.querySelector("body main>section article>button");

cardButton.addEventListener("click", flipCard);

function flipCard() {
    cardFront.classList.toggle("is-turned-away");
    cardBack.classList.toggle("is-turned-away");
}

