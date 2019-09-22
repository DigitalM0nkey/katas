// Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.

const gameBoard = function(num) {
  let whiteQueen = [2, 2];
  let whiteQueenPlaced = false;
  //let blackQueen = [5, 0];
  let line = [];
  let blankLine = [];
  let board = [];

  for (let i = 0; i < num; i++) {
    blankLine.push(0);
  }
  for (let i = 0; i < num; i++) {
    if (i === whiteQueen[1] && !whiteQueenPlaced) {
      line.push(1);
      whiteQueenPlaced = true;
    } else {
      line.push(0);
    }
  }
  console.log("wQYP:", whiteQueen[0]);
  for (let i = 0; i < num; i++) {
    if (whiteQueen[0] === i) {
      console.log("here");

      board.push(line);
    } else {
      board.push(blankLine);
    }

  }
  //line[whiteQueen[0]].splice(whiteQueen[1], 1, 1);
  return board;
};

// const placeQueens = function(num, p1) {
//   const queen1X = p1[1];
//   const queen1Y = p1[0];
//   //   const queen2;
//   gameBoard(num)[queen1X].splice(queen1Y, 1, 1);
//   console.log(gameBoard(num)[queen1X]);

// months.splice(index, amountOfElements, 'May');
//gameBoard(num)[0].splice(queen1X, queen1Y, 'May');

//   console.log(gameBoard(8));



// };



console.log(gameBoard(8));


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