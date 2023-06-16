
const container = document.querySelector('.container')
const redrawBtn = document.querySelector('button.redraw-btn')

redrawBtn.addEventListener('click', promptSquare);

//Clears previous grid and draws a new one
function drawGrid(squares = 16) {

    container.textContent = "";

    for(let i = 0; i < squares * squares; i++) {
        let gridDiv = document.createElement('div');

        gridDiv.style.width = `calc(var(--container-size)/${squares})`;
        gridDiv.style.height = `calc(var(--container-size)/${squares})`; 
        gridDiv.classList.add('grid-item'); 
        gridDiv.addEventListener('mouseover', changeColor);

        container.appendChild(gridDiv);
    }
}

function changeColor() {
    this.classList.add('hovered');
}

function promptSquare() {
    let squares = +prompt("Input the number of squares per side (Max: 100)");
    while(isNaN(squares) || squares > 100) {
        squares = +prompt("Please input a valid number");
    }
    drawGrid(squares);
}

drawGrid();

