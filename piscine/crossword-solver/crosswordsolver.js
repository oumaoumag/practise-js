// Function to validate the puzzle format
function isValidPuzzleFormat(puzzle) {
    return typeof puzzle === "string" && /^[.\n012]+$/.test(puzzle);
}

// Function to validate the word list
function isValidWordList(wordList) {
    return Array.isArray(wordList) && wordList.length >= 3 && 
           wordList.every(word => typeof word === "string") && 
           hasNoDuplicates(wordList);
}

// Function to check for duplicates in the word list
function hasNoDuplicates(arr) {
    return new Set(arr).size === arr.length;
}

// Main function to solve the crossword puzzle
function solveCrossword(puzzleString, wordList) {
    // Validate inputs
    if (!isValidPuzzleFormat(puzzleString)) {
        return 'Error: Invalid puzzle format';
    }

    if (!isValidWordList(wordList)) {
        return 'Error: Invalid word list';
    }

    // Prepare the grid and count starting positions
    const grid = parsePuzzleString(puzzleString);
    const filledGrid = initializeFilledGrid(grid);
    const startingPositionsCount = countStartingPositions(grid);
    
    if (startingPositionsCount !== wordList.length) {
        return 'Error: The number of starting positions does not match the number of words';
    }

    // Attempt to place words in the grid
    if (!placeWords(grid, filledGrid, wordList)) {
        return "Error: Unable to place all words";
    }

    return formatFilledGrid(filledGrid);
}

// Function to parse the puzzle string into a 2D grid
function parsePuzzleString(puzzle) {
    return puzzle.trim().split("\n").map(row => 
        row.split("").map(cell => (cell === "." ? -1 : parseInt(cell)))
    );
}

// Function to initialize the filled grid
function initializeFilledGrid(grid) {
    return grid.map(row => row.map(cell => (cell === -1 ? "." : "")));
}

// Function to count starting positions in the grid
function countStartingPositions(grid) {
    return grid.flat().reduce((count, cell) => (cell > 0 ? count + cell : count), 0);
}

// Function to place words in the grid recursively
function placeWords(grid, filledGrid, words, index = 0) {
    if (index === words.length) return true; // All words placed

    const currentWord = words[index];

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 0) continue; // Skip empty slots

            if (canPlaceWord(currentWord, grid, filledGrid, words, index, r, c, "horizontal") || 
                canPlaceWord(currentWord, grid, filledGrid, words, index, r, c, "vertical")) {
                return true;
            }
        }
    }
    return false; // Word couldn't be placed
}

// Function to check if a word can be placed in a given direction
function canPlaceWord(word, grid, filledGrid, words, index, row, col, direction) {
    const backup = []; // To restore previous state if placement fails

    for (let i = 0; i < word.length; i++) {
        const newRow = direction === "horizontal" ? row : row + i;
        const newCol = direction === "horizontal" ? col + i : col;

        if (newRow >= grid.length || newCol >= grid[0].length || 
            (filledGrid[newRow][newCol] !== "" && filledGrid[newRow][newCol] !== word[i])) {
            return false; // Placement failed
        }

        backup.push({ row: newRow, col: newCol, value: filledGrid[newRow][newCol] });
        filledGrid[newRow][newCol] = word[i]; // Place the letter
    }

    // If placement succeeded, check if we can place the next word
    if (placeWords(grid, filledGrid, words, index + 1)) {
        return true;
    }

    // Restore previous state
    backup.forEach(({ row, col, value }) => filledGrid[row][col] = value);
    return false; // Placement failed
}

// Function to format the filled grid back into a string
function formatFilledGrid(filledGrid) {
    return filledGrid.map(row => row.join("")).join("\n");
}

// Example usage
const examplePuzzle = '2001\n0..0\n1000\n0..0'; // Example puzzle
const exampleWords = ['casa', 'alan', 'ciao', 'anta']; // Example words
const crosswordResult = solveCrossword(examplePuzzle, exampleWords); // Solve the puzzle
console.log(crosswordResult); // Output the result
