import { useState } from "react";
import Board from "./components/Board/Board";
import Modal from "./components/Modal/Modal";
import "./styles.css";

export default function App() {
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <h1>Tetris Game</h1>
      <div className="score">
        <span onClick={() => setShowModal(!showModal)}> Instructions </span>
        <p>Score: {score}</p>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
      <Board score={score} setScore={setScore} />
    </div>
  );
}
