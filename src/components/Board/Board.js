import { useEffect, useState } from "react";
import { initialBoard } from "../../data/initialBoard";
import {
  playCurrentShape,
  generateNewShape,
  moveDown,
  moveLeft,
  moveRight,
  rotateShape
} from "../../tetris/util";
import Row from "../Row/Row";
import "./Board.css";

const Board = ({ score, setScore }) => {
  const [board, setBoard] = useState(initialBoard);
  const [gameFinished, setGameFinished] = useState(false);
  const [shape, setShape] = useState(null);
  const [shapeInterval, setShapeInterval] = useState(null);
  const [filledColoums, setFilledColoums] = useState(Array(20).fill(0));

  const addHandleKeyPress = () => {
    window.onkeyup = handleKeyPressUtil;
  };

  const removeHandleKeyPress = () => {
    window.onkeyup = null;
  };

  const handleKeyPressUtil = (e) => {
    switch (e.keyCode) {
      case 40:
        moveDown(
          shape,
          board,
          setShape,
          setBoard,
          filledColoums,
          setFilledColoums,
          score,
          setScore
        );
        break;
      case 37:
        moveLeft(shape, board, setShape, setBoard);
        break;
      case 39:
        moveRight(shape, board, setShape, setBoard);
        break;
      case 82:
        rotateShape(shape, board, setShape, setBoard);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (shape && !gameFinished) {
      addHandleKeyPress();
      const interval = setInterval((e) => {
        moveDown(
          shape,
          board,
          setShape,
          setBoard,
          filledColoums,
          setFilledColoums,
          score,
          setScore
        );
      }, 700);
      setShapeInterval(interval);
      playCurrentShape(shape, setShape, board, setBoard, setGameFinished);
    } else if (!gameFinished) {
      removeHandleKeyPress();
      if (shapeInterval) {
        clearInterval(shapeInterval);
        setShapeInterval(null);
      }
      setShape(generateNewShape());
      console.log("New Shape Generated");
    } else {
      if (shapeInterval) {
        clearInterval(shapeInterval);
        setShapeInterval(null);
      }
      removeHandleKeyPress();
      console.log("game finished!");
    }
  }, [shape]);

  return (
    <div className="board">
      {board.map((row, index) => (
        <Row key={index} row={row} />
      ))}
    </div>
  );
};

export default Board;
