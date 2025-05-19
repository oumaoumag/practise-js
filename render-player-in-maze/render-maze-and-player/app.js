// grid - 1 -> wall, 0 - path
const maze = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,0,1,1,1,1,1,1],
    [1,1,1,0,1,1,0,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
]

// Get the maze container element
const mazeContainer = document.getElementById('maze');

maze.forEach((row, y) => {
    row.forEach((cell, x) => {
        const div = document.createElement('div');
        div.className = cell ? 'wall' : 'path';
        div.dataset.x = x;
        div.dataset.y = y;
        mazeContainer.appendChild(div);
    });
});

// Place player at position (1 ,1)
const playerPosition = {y: 1, x: 1};
const playerDiv = mazeContainer.children[playerPosition.y * 10 + playerPosition.x];
playerDiv.classList.add('player');