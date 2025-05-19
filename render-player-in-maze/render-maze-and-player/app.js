
// Maze: 0 = path,  1 = wall
const maze  = [
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1]
];

// Get the maze container element
const mazeContainer = document.getElementById.getElementById('maze');

// Create the grid
maze.forEach((row, y) => {
    row.forEach((cell, x) => {
        const div = document.createElement('div');
        div.className =  cell ? 'wall' : 'path';
        div.dataset.x = x;
        div.dataset.y = y;
        mazeContainer.appendChild(div);
    });
});

// Place the player at position (1, 1)
const playerPosition = { x:1, y: 1};
const playerDiv = mazeContainer.children[playerPosition.y * 5 + playerPosition.x];
playerDiv.classList.add('player')



// let playerX = 1; // Starting position
// let playerY = 1;

// function drawMaze() {
//     for (let y = 0; y < maze.length; y++) {
//         for (let x = 0; x < maze[y].length; x++) {
//             if (maze[y][x] === 1) {
//                 ctx.fillStyle = 'black';
//                 ctx.fillRect(x * cellSize, y * cellSize, cellSize, ce)
//             }
//         }
//     }
// }