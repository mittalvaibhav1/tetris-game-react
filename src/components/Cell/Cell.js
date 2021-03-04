import "./Cell.css";

const Cell = ({ color }) => {
  return <div className="cell" style={{ background: color }}></div>;
};

export default Cell;
