# Crossword Puzzle Solver

## Description
The Crossword Puzzle Solver is a JavaScript application that takes an empty crossword puzzle and a list of words, attempting to fit the words into the puzzle according to specified rules. The puzzle is represented as a string, with specific characters indicating slots for words.

## Features
- Validates the puzzle format and word list.
- Parses the puzzle string into a 2D grid for processing.
- Attempts to place words both horizontally and vertically.
- Returns the filled crossword grid as a formatted string.

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://learn.zone01kisumu.ke/git/oumouma/crossword.git
2. Navigate to the project directory:
```Bash
cd crossword-solver
```

## Usage

1. Update the example puzzle and words directly in the `crosswordSolver.js` file or use your own inputs.
2. Run the solver using Node.js:
```bash
   node crosswordSolver.js
 ```

 ### Example

You can define a puzzle and a list of words like this:
```Js
const examplePuzzle = '2001\n0..0\n1000\n0..0'; // Example puzzle
const exampleWords = ['casa', 'alan', 'ciao', 'anta']; // Example words
const crosswordResult = solveCrossword(examplePuzzle, exampleWords); // Solve the puzzle
console.log(crosswordResult); // Output the result
```
### Expected Output

The output will be a filled crossword grid based on the input words and puzzle structure. For example, a successful placement might look like this:
```yaml
casa
alan
1000
0..0
```

## Error Handling

If there are issues with the puzzle format or word list, the program will return an error message such as:

   + Error: Invalid puzzle format
   + Error: Invalid word list
   + Error: The number of starting positions does not match the number of words
   + Error: Unable to place all words

## Authors

- **Ouma Ouma** - [Your GitHub Profile](https://github.com/garveyshah)

- **Brian Oiko** - [Your GitHub Profile](https://learn.zone01kisumu.ke/git/bobaigwa)  



## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for more information.