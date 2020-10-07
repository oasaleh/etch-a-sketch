const container = document.getElementById("grid-container");

function makeGrid(rows, cols) {
    // This set the css properties '--grows' and '--gcols' 
    // to user's input.
    container.style.setProperty("--grows", rows);
    container.style.setProperty("--gcols", cols);
    // This create the HTML div elements needed.
    for (i = 1; i <= (rows * cols); i++) {
        let eachCell = document.createElement('div');
        eachCell.innerHTML = i;
        container.appendChild(eachCell).className = 'grid-cell';
    }
}
makeGrid(16, 16);