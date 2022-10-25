// User Input when page loaded

// function requiredInput() {
//     let username = prompt("Welcome to the Stranger Things Memory Card Game! \n\nThe goal of this game is to find two matching cards using fewer moves than are provided to win it! \n\nTo proceed please enter your Name: ");
//     if (username === null || username === "") {
//         return requiredInput();
//     } else {
//         txt = "Good Luck, " + username + " !"
//     }
//     alert(txt);
// }

// requiredInput();

// Gathering the moves a player has left
const gameSection = document.getElementById("game-section");
const playerMovesLeft = document.getElementById("playerMovesLeft");
let playerMoves = 12;
playerMovesLeft.textContent = playerMoves;

// Gathering elements for cards
let card = document.createElement("div");
let frontFace = document.createElement("img");
let backFace = document.createElement("div");

// Generating the image data
const imageData = [{
        imgSrc: "../assets/images/billy.webp",
        name: "billy"
    },
    {
        imgSrc: "../assets/images/dustin.webp",
        name: "dustin"
    },
    {
        imgSrc: "../assets/images/eleven.webp",
        name: "eleven"
    },
    {
        imgSrc: "../assets/images/lucas.webp",
        name: "lucas"
    },
    {
        imgSrc: "../assets/images/max.webp",
        name: "max"
    },
    {
        imgSrc: "../assets/images/mike.webp",
        name: "mike"
    },
    {
        imgSrc: "../assets/images/steve.webp",
        name: "steve"
    },
    {
        imgSrc: "../assets/images/will.webp",
        name: "will"
    },
    {
        imgSrc: "../assets/images/billy.webp",
        name: "billy"
    },
    {
        imgSrc: "../assets/images/dustin.webp",
        name: "dustin"
    },
    {
        imgSrc: "../assets/images/eleven.webp",
        name: "eleven"
    },
    {
        imgSrc: "../assets/images/lucas.webp",
        name: "lucas"
    },
    {
        imgSrc: "../assets/images/max.webp",
        name: "max"
    },
    {
        imgSrc: "../assets/images/mike.webp",
        name: "mike"
    },
    {
        imgSrc: "../assets/images/steve.webp",
        name: "steve"
    },
    {
        imgSrc: "../assets/images/will.webp",
        name: "will"
    },
];

// Getting cards in no particular order
/**
 * randomize() to get images in random order
 * when page is loaded or refresehd
 */

function randomizeData() {
    let cardData = imageData;
    cardData.sort(() => Math.random() - 0.5);

    return cardData;

};

//Create Game Board Function
/**
 * Creating the Game Board
 */

function createBoard() {
    let cardData = randomizeData();

    for (let i = 0; i < imageData.length; i++) {

        // console.log(imageData[i], 'instance');

        card = document.createElement("div");
        frontFace = document.createElement("img");
        backFace = document.createElement("div");

        card.classList.add("card");
        frontFace.classList.add("frontFace");
        backFace.classList.add("backFace");

        // Add imageData to front of card
        frontFace.src = imageData[i].imgSrc;

        // Add name to cards
        card.setAttribute("name", imageData[i].name);

        gameSection.appendChild(card);
        card.appendChild(frontFace);
        card.appendChild(backFace);
    }
}
createBoard();

const cards = document.querySelectorAll(".card");
let flippedCard = false;
let firstCard, secondCard;
let secureBoard = false;

function flipCard() {
    // only turn two cards at a time
    if (secureBoard) return;

    // if user clicks twice on the same card, he still has to 
    // execute the click on the secondCard to be able to match the cards
    if (this === firstCard) return;

    this.classList.add("flipCard");

    if (!flippedCard) {
        //first click on card
        flippedCard = true;
        firstCard = this;
        //console.log({flippedCard, firstCard});

    } else {
        //second click on another card
        flippedCard = false;
        secondCard = this;

        //console.log({firstCard, secondCard});
        // console.log(firstCard.getAttribute("name"));
        // console.log(secondCard.getAttribute("name"));

        checkForMatch();
    }
}

/**
 * Function checking if both clicked cards match each other.
 */
function checkForMatch() {
    // check if cards match
    if (firstCard.getAttribute("name") === secondCard.getAttribute("name")) {
        // if they match
        preventFlip();
    }
    // console.log("Function succesfull");
    else {
        allowFlip();
        playerMoves--;
        playerMovesLeft.innerHTML = playerMoves;
    }
}

/**
 * Function prevents cards from flipping back, so they can't be clicked
 * on again.
 */
function preventFlip() {
    firstCard.removeEventListener("click, flipCard");
    firstCard.removeEventListener("click, flipCard");
    restoreCard();
}

/**
 * Function allows cards to flip back to be able to be clicked again.
 */
function allowFlip() {
    secureBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flipCard");
        secondCard.classList.remove("flipCard");

        secureBoard = false;
        restoreCard();
    }, 1000);
}

/**
 * Function allows user to click on the same card again onces its flipped back over, after board locks to only click 
 * on two cards.
 */
function restoreCard() {
    flippedCard = false;
    secureBoard = false;
    firstCard = null;
    secondCard = null;}

cards.forEach(card => card.addEventListener("click", flipCard));