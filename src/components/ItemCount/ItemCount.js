import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initCount, stock }) => {
  const [count, setCount] = useState(initCount);

  const increaseCounter = () => {
    count < stock && setCount(count + 1);
  };

  const lowerCounter = () => {
    count > initCount && setCount(count - 1);
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
