import { useState } from "react";
import "./InputCount.css";
const InputCount = ({ initCount = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initCount);
  const handleChange = (e) => {
    if (e.target.value <= stock && e.target.value >= 1) {
      setCount(parseInt(e.target.value));
    }
  };
  return (
    <div>
      <input
        className="inputCount"
        type="number"
        onChange={handleChange}
        value={count}
      />
      <button
        stock={stock}
        onClick={() => onAdd(count)}
        className="buttonCount"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default InputCount;
