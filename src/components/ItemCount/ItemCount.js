import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initCount = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initCount);

  const increaseCounter = () => {
    count < stock && setCount(count + 1);
  };

  const lowerCounter = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <>
      <div className="countDiv">
        <button className="buttonCount" onClick={lowerCounter}>
          -
        </button>
        <span>{count}</span>
        <button className="buttonCount" onClick={increaseCounter}>
          +
        </button>
      </div>
      <button onClick={() => onAdd(count)} className="buttonCount">
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
