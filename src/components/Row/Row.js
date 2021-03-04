import Cell from "../Cell/Cell";
import "./Row.css";

const Row = ({ row }) => {
  return (
    <div className="row">
      {row.map((cell, index) => (
        <Cell key={index} color={cell.color} />
      ))}
    </div>
  );
};

export default Row;
