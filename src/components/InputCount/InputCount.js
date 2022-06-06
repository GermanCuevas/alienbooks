import { useState } from "react";
import "./InputCount.css";
const InputCount = ({ initCount, stock, onAdd }) => {
  const [count, setCount] = useState(initCount);
  const handleChange = (e) => {
    if (e.target.value <= stock && e.target.value >= initCount) {
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
