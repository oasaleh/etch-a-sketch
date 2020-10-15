// Sets the rows and columns of 'grid-container'.
// Creates the number of div elements needed inside the container.
// Assigns css class names of 'grid-cell' to each newly created div element.
const container = document.getElementById("grid-container");
function makeGrid(rows=50, cols=100) {
    container.style.setProperty("--grows", rows);
    container.style.setProperty("--gcols", cols);
    for (i = 1; i <= (rows * cols); i++) {
        const eachCell = document.createElement('div');
        container.appendChild(eachCell).className = 'grid-cell ';
    }
}
makeGrid(50, 100);

// Creates 'cells' as an array of all elements with class name of 'grid-cell'.
// Adds EventListeners upon hovering on each cell of array 'cells'.
// Calls function changeColor to set background-color property of each cell to 'color'.
let cells = document.getElementsByClassName('grid-cell');
for (let cell of cells) {
    cell.addEventListener('mouseover', changeColor)
    function changeColor(color) {
        color = document.getElementById("myColor").value;
        cell.style.setProperty('background-color', color)
    }
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
    var gridCells = document.getElementsByName('div')
    container.parentNode.removeChild(gridCells)
    // let hovers = document.getElementsByName('div')
    // for (let hover of hovers) {
        hover.parentNode.remove()
        // cell.style.setProperty('border','none')
        // cell.style.setProperty('border','0.0001px solid rgb(233, 232, 232)')
     // }
    var userInput = prompt('Select the vertical grid size - Must be lower than 100 blocks')
    if (userInput <= 100 && userInput > 0) {
        makeGrid(userInput, (2*userInput))
    } else {
        alert('The number of blocks you entered is not correct!')
    }
}