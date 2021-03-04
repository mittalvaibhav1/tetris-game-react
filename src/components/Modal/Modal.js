import "./Modal.css";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal">
        <h1> Instructions </h1>
        <div className="modal-content">
          <ul>
            <li> * Use the arrow keys to navigate the blocks.</li>
            <li> * Use the 'R' key to rotate a block.</li>
            <li>
              * Fill all the cells in a row to clear that row and earn points.
            </li>
            <li>
              * Clearing multiple rows in a single turn attracts bonus points!
            </li>
            <li>
              * When a new block stops appearing means the game has finished!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
