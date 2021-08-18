const body = document.querySelector('body')
const sketchCont = document.querySelector('.sketchcont');
const sketchCell = document.querySelector('.sketchcell');


function defaultGrid(dimensions) {

    for (let i = 0; i < dimensions ; i++) {
        sketchCont.appendChild(sketchCell);
    }

}

defaultGrid(16);