let isRandomColor = false;
let isColorPicker = true;

(function initialize () {
    makeGrid(2, 4);
}) ();

// Sets the rows and columns of 'grid-container'.
// Creates the number of div elements needed inside the container.
// Assigns css class names of 'grid-cell' to each newly created div element.
function makeGrid(rows, cols) {
    const container = document.getElementById("grid-container");
    shampoGrid()
    container.style.setProperty("--grows", rows);
    container.style.setProperty("--gcols", cols);
    for (i = 1; i <= (rows * cols); i++) {
        const eachCell = document.createElement('div');
        container.appendChild(eachCell).className = 'grid-cell ';
    }
    addHover()
}

// Creates 'cells' as an array of all elements with class name of 'grid-cell'.
// Adds EventListeners upon hovering on each cell of array 'cells'.
// Calls function changeColor to set background-color property of each cell to 'color'.

function changeColorOnMouseOver(e) {
    let color = "";
    if (isRandomColor) {
        color = randomizeColor ();
    } else if (isColorPicker) {
        color = document.getElementById("myColor").value;
    }
    changeColor(this, color)
}
function changeColor (cell, color) {
    cell.style.setProperty('background-color', color);
}
// Adds EventListener to 'clearButton'.
// Calls clearGrid function to set background-color property to 'Transparent'.
document.getElementById('clearButton').addEventListener('click', clearGrid)
function clearGrid () {
    let hoveredCells = document.getElementsByClassName('grid-cell');
    for (let hoveredCell of hoveredCells) {
        hoveredCell.style.setProperty("background-color", 'Transparent')
    }
}
// Prompt the user to input the grid size.
document.getElementById('gridSize').addEventListener('click', specifyGrid)
function specifyGrid (rows) {
    clearGrid()  
    var userInput = parseInt(prompt('Select the vertical grid size - Must be lower than 100 blocks'))
    if (userInput <= 100 && userInput > 0) {
        makeGrid(userInput, (2*userInput))
    } else {
        alert('The number of blocks you entered is not correct!')
    }
}
function shampoGrid () {
    var node = document.getElementById('grid-container');
    node.innerHTML = "";
}
function addHover () {
    const cells = document.getElementsByClassName('grid-cell');
    for (let cell of cells) {
        cell.addEventListener('mouseover', changeColorOnMouseOver);
    }
}

function randomizeColor () {
    var letters = '0123456789ABCDEF';
    var colors = '#';
    for (var i = 0; i < 6; i++) {
      colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}

document.getElementById('randomColor').addEventListener('click', onClickRandomColor)
function onClickRandomColor (e) {
    isRandomColor = true;
    isColorPicker = false;
}

document.getElementById('myColor').addEventListener('click', onClickColorPicker)
function onClickColorPicker (e) {
    isRandomColor = false;
    isColorPicker = true;
}