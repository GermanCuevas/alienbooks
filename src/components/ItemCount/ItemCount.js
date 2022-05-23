import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initCount }) => {
  const [count, setCount] = useState(initCount);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const lowerCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="countDiv">
      <button onClick={lowerCounter}>-</button>
      <span>{count}</span>
      <button onClick={increaseCounter}>+</button>
    </div>
  );
};

export default ItemCount;
