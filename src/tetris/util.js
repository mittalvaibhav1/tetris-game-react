import { shapes, Square, Stick, Z, InvertedZ, Pyramid, L } from "./shapes";

// Random Shape Generator
export const generateNewShape = () => {
  const randomShape = shapes[Math.floor(Math.random() * 10) % shapes.length];
  switch (randomShape) {
    case "Square":
      return createSquare();
    case "Stick":
      return createStick();
    case "Z":
      return createZ();
    case "InvertedZ":
      return createInvertedZ();
    case "Pyramid":
      return createPyramid();
    case "L":
      return createL();
    default:
      throw new Error("Invalid Shape!");
  }
};

// Shape Creators
const createStick = () => {
  const state = Math.floor(Math.random() * 10) % 2;
  const stick = new Stick(state);
  return stick;
};
const createSquare = () => {
  const state = Math.floor(Math.random() * 10) % 1;
  const square = new Square(state);
  return square;
};
const createZ = () => {
  const state = Math.floor(Math.random() * 10) % 2;
  const z = new Z(state);
  return z;
};
const createInvertedZ = () => {
  const state = Math.floor(Math.random() * 10) % 2;
  const invertedZ = new InvertedZ(state);
  return invertedZ;
};
const createPyramid = () => {
  const state = Math.floor(Math.random() * 10) % 4;
  const pyramid = new Pyramid(state);
  return pyramid;
};
const createL = () => {
  const state = Math.floor(Math.random() * 10) % 4;
  const l = new L(state);
  return l;
};

// Check safe utilites
const isShapeSafe = (currentShape, board) => {
  for (let i = 0; i < 4; i++) {
    let x = currentShape.coordinatesList[i][0];
    let y = currentShape.coordinatesList[i][1];
    if (!isSafeCoordinate(x, y, board)) {
      return false;
    }
  }
  return true;
};

const isSafeCoordinate = (x, y, board) => {
  return x < 20 && y >= 0 && y < 20 && !board[x][y].occupied;
};

// Board Cleaner
const cleanBoardRow = (rowToDelete, board, setBoard) => {
  board.splice(rowToDelete, 1);
  const newRow = [];
  for (let i = 0; i < 20; i++) {
    newRow.push({
      color: "gainsboro",
      occupied: false
    });
  }
  board.unshift(newRow);
};

// Shape movement
export const moveDown = (
  currentShape,
  board,
  setShape,
  setBoard,
  filledColumns,
  setFilledColoums,
  score,
  setScore
) => {
  let isSafe = true;
  // Cleanup current shape
  for (let i = 0; i < 4; i++) {
    let x = currentShape.coordinatesList[i][0];
    let y = currentShape.coordinatesList[i][1];
    board[x][y].occupied = false;
    board[x][y].color = "gainsboro";
  }
  // Check if next position is safe
  for (let i = 0; i < 4; i++) {
    let x = currentShape.coordinatesList[i][0];
    let y = currentShape.coordinatesList[i][1];
    if (!isSafeCoordinate(x + 1, y, board)) {
      isSafe = false;
      break;
    }
  }
  // if not safe, recolor current position and set filled coloumns
  if (!isSafe) {
    for (let i = 0; i < 4; i++) {
      let x = currentShape.coordinatesList[i][0];
      let y = currentShape.coordinatesList[i][1];
      board[x][y].occupied = true;
      board[x][y].color = currentShape.color;
      filledColumns[x] += 1;
    }
    let streak = 0;
    for (let i = 0; i < 4; i++) {
      let x = currentShape.coordinatesList[i][0];
      if (filledColumns[x] === 20) {
        streak += 1;
        cleanBoardRow(x, board, setBoard);
        for (let j = i + 1; j < 4; j++) {
          if (currentShape.coordinatesList[i][0] < x) {
            currentShape.coordinatesList[i][0] += 1;
          }
        }
        for (let j = x; j >= 1; j--) {
          filledColumns[j] = filledColumns[j - 1];
        }
      }
    }
    let bonus = streak > 1 ? streak * 100 : 0;
    score = score + streak * 50 + bonus;
    setScore(score);
    setBoard([...board]);
    setFilledColoums([...filledColumns]);
    console.log("Unsafe!!", currentShape);
    setShape(null);
    return;
  }
  // if safe then color the next position
  for (let i = 0; i < 4; i++) {
    let x = currentShape.coordinatesList[i][0];
    let y = currentShape.coordinatesList[i][1];
    currentShape.coordinatesList[i][0] += 1;
    board[x + 1][y].occupied = true;
    board[x + 1][y].color = currentShape.color;
  }
  setBoard([...board]);
};

export const moveRight = (currentShape, board, setShape, setBoard) => {
  let isSafe = true;
  // Cleanup current shape
  for (let i = 0; i < 4; i++) {
    let x = currentShape.coordinatesList[i][0];
    let y = currentShape.coordinatesList[i][1];
    board[x][y].occupied = false;
    board[x][y].color = "gainsboro";
  }
  // Check if next position is safe
  for (let i = 0; i < 4; i++) {
    let x = currentShape.coordinatesList[i][0];
    let y = currentShape.coordinatesList[i][1];
    if (!isSafeCoordinate(x, y + 1, board)) {
      isSafe = false;
      break;
    }
  }
  // if not safe, recolor current position
  if (!isSafe) {
    for (let i = 0; i < 4; i++) {
      let x = currentShape.coordinatesList[i][0];
      let y = currentShape.coordinatesList[i][1];
      board[x][y].occupied = true;
      board[x][y].color = currentShape.color;
    }
    console.log("Cannot go right!", currentShape);
    //setShape(null);
    return;
  }
  // if safe then color the next position
  for (let i = 0; i < 4; i++) {
    let x = currentShape.coordinatesList[i][0];
    let y = currentShape.coordinatesList[i][1];
    currentShape.coordinatesList[i][1] += 1;
    board[x][y + 1].occupied = true;
    board[x][y + 1].color = currentShape.color;
  }
  setBoard([...board]);
};

export const moveLeft = (currentShape, board, setShape, setBoard) => {
  let isSafe = true;
  // Cleanup current shape
  for (let i = 0; i < 4; i++) {
    let x = currentShape.coordinatesList[i][0];
    let y = currentShape.coordinatesList[i][1];
    board[x][y].occupied = false;
    board[x][y].color = "gainsboro";
  }
  // Check if next position is safe
  for (let i = 0; i < 4; i++) {
    let x = currentShape.coordinatesList[i][0];
    let y = currentShape.coordinatesList[i][1];
    if (!isSafeCoordinate(x, y - 1, board)) {
      isSafe = false;
      break;
    }
  }
  // if not safe, recolor current position
  if (!isSafe) {
    for (let i = 0; i < 4; i++) {
      let x = currentShape.coordinatesList[i][0];
      let y = currentShape.coordinatesList[i][1];
      board[x][y].occupied = true;
      board[x][y].color = currentShape.color;
    }
    console.log("Cannot go left!", currentShape);
    //setShape(null);
    return;
  }
  // if safe then color the next position
  for (let i = 0; i < 4; i++) {
    let x = currentShape.coordinatesList[i][0];
    let y = currentShape.coordinatesList[i][1];
    currentShape.coordinatesList[i][1] -= 1;
    board[x][y - 1].occupied = true;
    board[x][y - 1].color = currentShape.color;
  }
  setBoard([...board]);
};

// Shape rotator
export const rotateShape = (currentShape, board, setShape, setBoard) => {
  const rotatedList = currentShape.rotate();
  let isSafe = true;
  // Cleanup current shape
  for (let i = 0; i < 4; i++) {
    let x = currentShape.coordinatesList[i][0];
    let y = currentShape.coordinatesList[i][1];
    board[x][y].occupied = false;
    board[x][y].color = "gainsboro";
  }
  // Check if the rotated position is safe
  for (let i = 0; i < 4; i++) {
    let x = rotatedList[i][0];
    let y = rotatedList[i][1];
    if (!isSafeCoordinate(x, y, board)) {
      isSafe = false;
      break;
    }
  }
  // if not safe, recolor current position
  if (!isSafe) {
    for (let i = 0; i < 4; i++) {
      let x = currentShape.coordinatesList[i][0];
      let y = currentShape.coordinatesList[i][1];
      board[x][y].occupied = true;
      board[x][y].color = currentShape.color;
    }
    console.log("Cannot rotate!");
    return;
  }
  // if safe then color the rotated position
  currentShape.setNextState();
  for (let i = 0; i < 4; i++) {
    let x = rotatedList[i][0];
    let y = rotatedList[i][1];
    currentShape.coordinatesList[i] = rotatedList[i];
    board[x][y].occupied = true;
    board[x][y].color = currentShape.color;
  }
  setBoard([...board]);
};

// Play current shape
export const playCurrentShape = (
  currentShape,
  setShape,
  board,
  setBoard,
  setGameFinished
) => {
  if (isShapeSafe(currentShape, board)) {
    for (let i = 0; i < 4; i++) {
      const x = currentShape.coordinatesList[i][0];
      const y = currentShape.coordinatesList[i][1];
      board[x][y].occupied = true;
      board[x][y].color = currentShape.color;
    }
    setBoard([...board]);
  } else {
    setGameFinished(true);
    setShape(null);
  }
};
