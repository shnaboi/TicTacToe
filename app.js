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
let gameCellArray = Array.from(gameCells);

startGame();

function startGame() {
    for (let i = 0; i < gameCells.length; i++) {
        gameCells[i].style.backgroundImage = '';
        gameCells[i].style.backgroundColor = 'grey';
        gameCells[i].classList.remove(X_CLASS);
        gameCells[i].classList.remove(O_CLASS);
        gameCells[i].addEventListener('click', handleClick)
    }

    // gameCells.forEach(cell => {
    //     cellArray.push(cell);
    //     cell.style.backgroundImage = '';
    //     cell.style.backgroundColor = 'grey';
    //     cell.classList.remove(X_CLASS);
    //     cell.classList.remove(O_CLASS);
    //     cell.addEventListener('click', handleClick, {once: true})
    // })
    xTurn = true;
    setBoardHover();
}

function handleClick(cell) {
    const gameCell = cell.target;
    const gameCellId = cell.target.id;
    const playerTurn = xTurn ? X_CLASS : O_CLASS;
    takeTurn(gameCell, playerTurn, gameCellId);
    checkWin();
    changeTurn();
    setBoardHover();
    console.log(cell.target.id)
    console.log(gameCells)
}

function changeTurn() {
    xTurn = !xTurn;
}

function takeTurn(gameCell, player, id) {
    gameCell.style.backgroundImage = `url(images/${player}.svg)`;
    gameCell.classList.add(`${player}`);
    gameArray[id] = player;
    console.log(gameArray);

    console.log(gameCellArray);
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
