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