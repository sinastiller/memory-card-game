// Gathering the moves a player has left
const gameSection = document.getElementById("game-section");
const playerMovesLeft = document.getElementById("playerMovesLeft");
const playerMoves = 8;



playerMovesLeft.textContent = playerMoves;

// Generating the image data
const imageData  =  [ {
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

// Get cards in no particular order
const randomizeData = () => {
    const cardData = imageData;
    cardData.sort(() => 0.5 - Math.random());
    return cardData;
};

//Create Game Board Function
for (let i = 0; i < imageData.length; i++) {

    //console.log(imageData[i], 'instance');
    const card = document.createElement("div");
    const frontFace = document.createElement("img");
    const backFace = document.createElement("div");

    frontFace.src = imageData[i].imgSrc;

    card.classList.add("card");
    frontFace.classList.add("frontFace");
    backFace.classList.add("backFace");

    gameSection.appendChild(card);
    card.appendChild(frontFace);
    card.appendChild(backFace);

    randomizeData();
} 

// flipCard function

// checkForMatch function

// result function

// restart functionv                                 