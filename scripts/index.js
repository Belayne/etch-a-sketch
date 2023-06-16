
const container = document.querySelector('.container')
const redrawBtn = document.querySelector('button.redraw-btn')

redrawBtn.addEventListener('click', promptSquare);

window.addEventListener('mouseover', changeColor);

//Clears previous grid and draws a new one
function drawGrid(squares = 16) {

    container.textContent = "";

    for(let i = 0; i < squares * squares; i++) {
        let gridDiv = document.createElement('div');

        gridDiv.style.width = `calc(var(--container-size)/${squares})`;
        gridDiv.style.height = `calc(var(--container-size)/${squares})`; 
        gridDiv.classList.add('grid-item'); 

        container.appendChild(gridDiv);
    }
}

function changeColor(e) {
    console.log(e.target.classList.contains('grid-item'))
    if(e.target.classList.contains('grid-item')){
        e.target.classList.add('hovered');
    }
}

function promptSquare() {
    let squares = +prompt("Input the number of squares per side (Max: 100)");
    while(isNaN(squares) || squares > 100) {
        squares = +prompt("Please input a valid number");
    }
    drawGrid(squares);
}

drawGrid();

