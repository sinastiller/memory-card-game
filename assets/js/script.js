// Gathering the moves a player has left
const gameSection = document.getElementById("game-section");
const playerMovesLeft = document.getElementById("playerMovesLeft");
const playerMoves = 8;

playerMovesLeft.textContent = playerMoves;

// Generating the image data
const imageData = () => [
    {imgSrc: "./images/billy.webp", name: "billy"},
    {imgSrc: "./images/dustin.webp", name: "dustin"},
    {imgSrc: "./images/eleven.webp", name: "eleven"},
    {imgSrc: "./images/lucas.webp", name: "lucas"},
    {imgSrc: "./images/max.webp", name: "max"},
    {imgSrc: "./images/mike.webp", name: "mike"},
    {imgSrc: "./images/steve.webp", name: "steve"},
    {imgSrc: "./images/will.webp", name: "will"},
    {imgSrc: "./images/billy.webp", name: "billy"},
    {imgSrc: "./images/dustin.webp", name: "dustin"},
    {imgSrc: "./images/eleven.webp", name: "eleven"},
    {imgSrc: "./images/lucas.webp", name: "lucas"},
    {imgSrc: "./images/max.webp", name: "max"},
    {imgSrc: "./images/mike.webp", name: "mike"},
    {imgSrc: "./images/steve.webp", name: "steve"},
    {imgSrc: "./images/will.webp", name: "will"},
];

// Get cards in no particular order

const randomizeData = () => {
    const cardData = imageData();
    cardData.sort(() => Math.random() - 0.5);
    console.log(cardData);
}

randomizeData();