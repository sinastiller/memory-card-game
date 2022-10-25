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
let playerMoves = 8;
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
function flipCard() {
    this.classList.toggle("flipCard");
}
cards.forEach( card => card.addEventListener("click", flipCard));

