let firstCard = 2;
let secondCard = 4;
let newCard = 3;
let sum = firstCard+secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let firstTime = true;
const startEl = document.getElementById("start-game");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum");
const cardEl = document.querySelector("#cards");
const newCardEl = document.querySelector("#new-card")
const restartEl = document.querySelector("#restart-game")
function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
    if (firstTime) {
        sumEl.textContent = "Sum: " + sum;
        cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
        
    }
    firstTime=false
}
function drawNewCard() {
    cardEl.textContent +=" "+ newCard;
    sum += newCard
    console.log(sum);
    startGame();
}
function restart(){
    firstTime = true;
    sumEl.textContent = "Sum: "
    sum = firstCard+secondCard
    cardEl.textContent = "Cards: "
    messageEl.textContent = "Want to play a round again?"
}
restartEl.addEventListener("click",restart)
startEl.addEventListener("click", startGame);
newCardEl.addEventListener("click", drawNewCard);


