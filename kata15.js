// Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.

const gameBoard = function(num) {
  let line = [];
  let board = [];
  for (let i = 0; i < num; i++) {
    line.push(0);
  }

  for (let i = 0; i < num; i++) {
    board.push(line);
  }
  return board;
};

console.log(gameBoard(8));

// function sumToOne(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n + sumToOne(n - 1);
// }

// console.log(sumToOne(4));






// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);



// console.log(generatedBoard);


// console.log(queenThreat(generatedBoard));




// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true