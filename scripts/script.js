const DEFAULT_SIZE = 16;

const body = document.querySelector('body')
const sketchCont = document.querySelector('#sketchcont');
const sketchCell = document.querySelector('#cellOrigin');
const allCells = document.querySelectorAll('.sketchcell')
const resetButton = document.querySelector('#reset');
const randomColorButton = document.querySelector('#rancolor');

resetButton.onclick = () => reset();

let drawingColor = '#333333';

function draw(e) {
    e.target.style.backgroundColor = drawingColor;
}

function changeColor(newColor) {
    drawingColor = newColor;
}

function randomColor() {
    drawingColor = Math.floor(Math.random()*16777215).toString(16);
}

function clearGrid() {
    sketchCont.innerHTML = '';
}

function setGrid(rows, columns) {

    sketchCont.style.setProperty('--grid-rows', rows);
    sketchCont.style.setProperty('--grid-columns', columns);
    
    for (let i = 0; i < (rows * columns) ; i++) {
        const newcell = document.createElement('div');
        //newcell.setAttribute('class', 'sketchCell');
        newcell.addEventListener('mouseover', draw)
        sketchCont.appendChild(newcell);
    }
}

function reset() {
    let newsize = prompt('How big would you like your new grid?');
    clearGrid();
    setGrid(newsize, newsize);
}

setGrid(32, 32);
