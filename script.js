const gridContainer = document.getElementById('grid-container');
const newGridButton = document.getElementById('new-grid');



// adds rows to the grid
const addRows = rowNum => {
    // Ensures the existing grid is cleared before creating a new one
    gridContainer.innerHTML = '';

    // Creates row elements
    for (let i = 0; i < rowNum; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        // Append grid items to rows
        for (let j = 0; j < rowNum; j++) {
            let gridItem = document.createElement('div');
            gridItem.style.width = (500 / rowNum) + 'px';
            gridItem.style.height = (500 / rowNum) + 'px';
            gridItem.classList.add('grid-item');
            row.appendChild(gridItem);
        }
        // Append row to the grid container
        gridContainer.appendChild(row);
    }
    // Resets the background colour of the grid when a new grid is generated
    changeColor();
}
// The default amount of rows added when the first grid is generated
addRows(16);

// changes color of the grid item
function changeColor() {
    document.querySelectorAll('.grid-item').forEach(item => item.addEventListener('mouseover', () => {
        item.classList.add('white-grid-item');
    }));
}
changeColor();

// Allows the user to create a new grid in the size they want from 16 to 50 grid items in width by height
newGridButton.addEventListener('click', () => {
    const numStr = prompt('Enter a new grid size from 16 to 50.');
    // If cancel is clicked the prompt closes
    if (numStr = null) {
        return;
    }
    // Checks if the user has entered a number between the set quantities and throws an alert if they haven't
    const num = parseInt(numStr);
    if (num >= 16 && num <= 50) {
        addRows(num);
    } else {
       alert('Enter a number between 16 and 50.');
    }
});