const gameBoard = document.querySelector('.game-board');
const gameCells = document.querySelectorAll('[data-cell]');

const X_CLASS = 'x';
const O_CLASS = 'o';

gameCells.forEach(cell => {
    addEventListener('click', handleClick, {once: true})

})

function handleClick(e) {
    const cell = e.target;
    cell.textContent = 'x';

}

let gameArray = [];
















// Describe common bugs you might run into using constructors.

// Write a factory method that returns an object.
// Explain how scope works in JavaScript (bonus points if you can point out what ES6 changed!).
// Explain what Closure is and how it impacts private functions & variables.
// Describe how private functions & variables are useful.
// Use inheritance in objects using the factory pattern.
// Explain the module pattern.
// Describe IIFE. What does it stand for?
// Briefly explain namespacing and how it’s useful.
