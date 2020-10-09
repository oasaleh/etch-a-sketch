const container = document.getElementById("grid-container");

function makeGrid(rows, cols) {
    // This set the css properties '--grows' and '--gcols' 
    // to user's input.
    container.style.setProperty("--grows", rows);
    container.style.setProperty("--gcols", cols);
    // This create the HTML div elements needed.
    for (i = 1; i <= (rows * cols); i++) {
        let eachCell = document.createElement('div');
        // eachCell.innerHTML = i;
        container.appendChild(eachCell).className = 'grid-cell';
    }
}
makeGrid(60, 120);

// This following statement does nto work because getElementsByClassName returns an
// array. And this array (aka an object) does not have addEventListener method.
// document.getElementsByClassName('grid-cell').addEventListener('mouseover', changeColor)

let cells = document.getElementsByClassName('grid-cell');
for (let cell of cells) {
    cell.addEventListener('mouseover', changeColor)
}
function changeColor(e) {
    console.log(e)
}