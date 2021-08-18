const body = document.querySelector('body')
const sketchCont = document.querySelector('#sketchcont');
const sketchCell = document.querySelector('.sketchcell');


function setGrid(rows, columns) {

    sketchCont.style.setProperty('--grid-rows', rows);
    sketchCont.style.setProperty('--grid-rows', columns);
    
    for (let i = 0; i < (rows * columns) ; i++) {
        sketchCont.appendChild(sketchCell);
        let newcell = document.createElement('div');
        newcell.classList.add('sketchcell');

        sketchCont.appendChild(newcell);
    }
}

setGrid(16, 16);