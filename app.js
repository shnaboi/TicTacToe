const gameBoard = document.querySelector('.game-board');
const gameCells = document.querySelectorAll('[data-cell]');
const X_CLASS = 'x';
const O_CLASS = 'o';
const WIN_ARRAY = [
    [0,1,2],
    [0,3,6], 
    [0,4,8],
    [1,4,7], 
    [2,4,6], 
    [2,5,8], 
    [3,4,5], 
    [6,7,8]
]

let xTurn;
let gameArray = Array.from(Array(9).keys());

startGame();

function startGame() {
    gameCells.forEach(cell => {
        cell.style.backgroundImage = '';
        cell.style.backgroundColor = 'grey';
        cell.addEventListener('click', handleClick, {once: true})
    })
    xTurn = true;
    setBoardHover();
}

function handleClick(e) {
    const gameCell = e.target;
    const playerTurn = xTurn ? X_CLASS : O_CLASS;
    takeTurn(gameCell, playerTurn);
    checkWin();
    changeTurn();
    setBoardHover();
    console.log(gameArray)
}

function changeTurn() {
    xTurn = !xTurn;
}

function takeTurn(gameCell, turn) {
    gameCell.style.backgroundImage = `url(images/${turn}.svg)`;
    gameCell.classList.add(`${turn}`);
}

function setBoardHover() {
    gameBoard.classList.remove(X_CLASS);
    gameBoard.classList.remove(O_CLASS);
    if (xTurn) {
        gameBoard.classList.add(X_CLASS);
    } else {
        gameBoard.classList.add(O_CLASS);
    }
}

function checkWin() {
    return;
}

// POSSIBLE WIN COMBOS
// [1,2,3] [1,4,7] [1,5,9] [2,5,8] [3,5,7] [3,6,9] [4,5,6] [7,8,9]













// Describe common bugs you might run into using constructors.

// Write a factory method that returns an object.
// Explain how scope works in JavaScript (bonus points if you can point out what ES6 changed!).
// Explain what Closure is and how it impacts private functions & variables.
// Describe how private functions & variables are useful.
// Use inheritance in objects using the factory pattern.
// Explain the module pattern.
// Describe IIFE. What does it stand for?
// Briefly explain namespacing and how it’s useful.
