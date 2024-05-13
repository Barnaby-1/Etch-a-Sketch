// adds a 16x16 grid

const gridContainer = document.getElementById('grid-container');

const addRows = () => {
    // Creates row elements
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        // Append grid items to rows
        for (let j = 0; j < 16; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            row.appendChild(gridItem);
        }
        // Append row to the grid container
        gridContainer.appendChild(row);
    }
}

addRows();

// changes color of the grid item
function changeColor() {
    document.querySelectorAll('.grid-item').forEach(item => item.addEventListener('mouseover', () => {
        item.classList.add('white-grid-item');
    }));
}

changeColor();
