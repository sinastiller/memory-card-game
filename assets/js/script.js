// Gathering the moves a player has left
const gameSection = document.getElementById("game-section");
const playerMovesLeft = document.getElementById("playerMovesLeft");
const playerMoves = 8;

playerMovesLeft.textContent = playerMoves;

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

// Get cards in no particular order

/**
 * randomize() to get images in random order
 * when page is loaded or refresehd
 */

function randomizeData() {
    const cardData = imageData;
    cardData.sort(() => Math.random() - 0.5);

    return cardData;
};

/**
 * shuffleCards() to randomize cardData thorugh a loop
 * when page is opened or refreshed
 */

function shuffleCards() {
    const cardData = randomizeData();

    //Create Game Board Function
    for (let i = 0; i < imageData.length; i++) {

        //console.log(imageData[i], 'instance');
        const card = document.createElement("div");
        const frontFace = document.createElement("img");
        const backFace = document.createElement("div");

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

        
        // Toogle Cards => Class will be added and removed on every click
        
        card.addEventListener("click", (flipCard) => {
            card.classList.toggle("flipCard");
            checkForMatch(flipCard);
        });
    };
};

// checkForMatch function

function checkForMatch(flipCard) {
    console.log(flipCard);
    const clickedCard = flipCard.target;
    console.log(clickedCard);
}
shuffleCards();



// result function

// restart function                                

//pop up when open page and when game is over