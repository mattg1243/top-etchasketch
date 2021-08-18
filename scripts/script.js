const body = document.querySelector('body')
const sketchCont = document.querySelector('#sketchcont');
const sketchCell = document.querySelector('#cellOrigin');


function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

function clearGrid() {
    allCells.style.setProperty('background-color', 'white');
}

function setGrid(rows, columns) {

    sketchCont.style.setProperty('--grid-rows', rows);
    sketchCont.style.setProperty('--grid-columns', columns);
    
    for (let i = 0; i < (rows * columns) ; i++) {
        const newcell = document.createElement('div');
        newcell.setAttribute('class', 'sketchCell');
        newcell.addEventListener('mouseover', changeColor)
        sketchCont.appendChild(newcell);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

function clearGrid() {
    allCells.style.setProperty('background-color', 'white');
}

setGrid(32, 32);
