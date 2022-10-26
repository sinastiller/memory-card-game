# TESTING FOR MEMORY CARD GAME

## Contents
 * [Automated Testing](#automatedtesting)
    * [W3C Validator](#w3cvalidator)
    * [Responsiveness](#responsivness)
    * [Lighthouse](#lighthouse)
* [Manual Testing](#manualtesting)
* [Bugs](#bugs)

## [Manual Testing](#manualtesting)

| FEATURE | EXPECTED OUTCOME| ACTION | RESULT |
| -------------              | -------------                                | ------------- | ------------- |
| randomizeData() | Cards being logged to console in no particular order | Open window/refresh window, inspect page, open console | Cards appear in random orders evertime page gets refreshed|
| console.log(cardData) in shufflecards()| Cards should be logged randomly to the console | Open window/refresh window, inspect page, open console | Cards appear in random orders evertime page gets refreshed|
|  console.log(flipCard) | 
| console.log(clickedCard)|
| checkForMatch(flipCard) |

## [Bugs](#bugs)

The following issues have been solved thorughout the process:
* Due to the not-working checkForMatch() I had to start over in script.js and alter some of my steps to acchieve the desired working result.
* When clicking on the cards to find two matching cards, the user was able to click on more than two in a small amount of time. To prevent this from happening I declared a variable secureBoard, that will only allow two cards to be clicked on at the same time and only when they have been flipped back, is the user able to choose the next two cards.
}
* I introduced the restoreCard(), so the user is able to reclick on the same card, which was selected in the last move. Also if the user clicks twice on the same card, another card still needs to be clicked on the execute the checkForMatch() and start a new flip round of choosing the next two cards.