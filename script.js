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
const cardsContainer = document.querySelector("body>main>section");
const cardFront = cardsContainer.querySelectorAll("article>div.card-front");
const cardBack = cardsContainer.querySelectorAll("article>div.card-back");
const cardButton = cardsContainer.querySelectorAll("article>button");

cardButton.forEach(button => {
    button.addEventListener("click", flipCard);
});

function flipCard() {
    cardFront.forEach(front => {
        front.classList.toggle("is-turned-away")
    });
    cardBack.forEach(back => {
        back.classList.toggle("is-turned-away")
    });
}

// * CARD TURNING
const cards = cardsContainer.querySelectorAll("article");
let current = 0;

function setCardOrder() {
    cards.forEach((card, i) => {
        card.classList.remove("left", "middle", "right");

        if (i === current) card.classList.add("middle");
        else if (i === current - 1) card.classList.add("right");
        else if (i === current + 1) card.classList.add("left");
    });
}

function turnLeft() {
    if (current > 0) {
        current--;
        setCardOrder();
        console.log("Left");
    }
}

function turnRight() {
    if (current < cards.length - 1) {
        current++;
        setCardOrder();
        console.log("Right");
    }
}

setCardOrder(); // set the initial state on load

