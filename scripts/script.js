const body = document.querySelector('body')
const sketchCont = document.querySelector('#sketchcont');
const sketchCell = document.querySelector('#cellOrigin');
const allCells = document.querySelectorAll('.sketchcell')
const resetButton = document.querySelector('#reset')

resetButton.onclick = () => reset();

let drawingColor = '#333333';

function draw(e) {
    e.target.style.backgroundColor = drawingColor;
}

function reset() {
    let newsize = prompt('How big would you like your new grid?');
    setGrid(newsize, newsize);
    clearGrid();
}

function changeColor(newColor) {
    drawingColor = newColor;
}

function clearGrid() {
    allCells.forEach(cell => cell.style.setProperty('background-color', 'white'));
}

function setGrid(rows, columns) {

    sketchCont.style.setProperty('--grid-rows', rows);
    sketchCont.style.setProperty('--grid-columns', columns);
    
    for (let i = 0; i < (rows * columns) ; i++) {
        const newcell = document.createElement('div');
        newcell.setAttribute('class', 'sketchCell');
        newcell.addEventListener('mouseover', draw)
        sketchCont.appendChild(newcell);
    }
}


setGrid(32, 32);
