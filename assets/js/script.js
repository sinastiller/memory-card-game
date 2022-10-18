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
    cardData.sort(() => 0.5 - Math.random());
    return cardData;
}

randomizeData();

//Create Game Board Function
const card = document.createElement("div");
const frontFace = document.createElement("img");
const backFace = document.createElement("div");

card.classList.add("card");
frontFace.classList.add("frontFace");
backFace.classList.add("backFace");

gameSection.appendChild(card)
card.appendChild(frontFace);
card.appendChild(backFace);

frontFace.setAttribute(imgSrc);
backFace.setAttribute(imgSrc);



