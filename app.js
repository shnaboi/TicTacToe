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
let gameArray;

startGame();

function startGame() {
    for (let i = 0; i < gameCells.length; i++) {
        gameCells[i].style.backgroundImage = '';
        gameCells[i].style.backgroundColor = 'grey';
        gameCells[i].classList.remove(X_CLASS);
        gameCells[i].classList.remove(O_CLASS);
        gameCells[i].addEventListener('click', handleClick, {once: true});
        gameArray = Array.from(Array(9).keys());
    }
    xTurn = true;
    setBoardHover();
}

function handleClick(cell) {
    const gameCell = cell.target;
    const gameCellId = cell.target.id;
    const playerTurn = xTurn ? X_CLASS : O_CLASS;
    takeTurn(gameCell, playerTurn, gameCellId);

    let gameWin = checkWin(gameArray, playerTurn);
    if (gameWin) gameOver(gameWin);

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
    let gameWin = checkWin(gameArray, player);
    if (gameWin) gameOver(gameWin);
}

function checkWin(board, player) {
    // playerMoves goes through every element of the board array
    // a = accumulator array, e is the element, i is index
    // a is what reduce method is returning as seen in the ternOp
    // playerMoves will find every play that the player has played
    let playerMoves = board.reduce((a, e, i) => 
        (e === player) ? a.concat(i) : a, []);

    let result = null;

    for (let [index, win] of WIN_ARRAY.entries()) {
        if (win.every(elem => playerMoves.indexOf(elem) > -1)) {
            result = {index: index, player:player};
            break;
        }
    }
    return result;
}

function gameOver(gameWin) {
    for (let index of WIN_ARRAY[gameWin.index]) {
        document.getElementById(index).style.backgroundColor = 
            gameWin.player == X_CLASS ? 'green' : 'red';
    }
    for (let i = 0; i < gameCells.length; i++) {
        gameCells[i].removeEventListener('click', handleClick)
    }
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

// for of loop
// array.reduce
// array concat
// Array.every()













// Describe common bugs you might run into using constructors.

// Write a factory method that returns an object.
// Explain how scope works in JavaScript (bonus points if you can point out what ES6 changed!).
// Explain what Closure is and how it impacts private functions & variables.
// Describe how private functions & variables are useful.
// Use inheritance in objects using the factory pattern.
// Explain the module pattern.
// Describe IIFE. What does it stand for?
// Briefly explain namespacing and how it’s useful.
