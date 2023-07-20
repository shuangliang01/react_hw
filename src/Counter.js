import { useState } from "react";

let timer = null;
export default function Counter() {
  const [count, setCount] = useState(0);
  const [startButtonText, setStartButtonText] = useState("Start");

  const handleClickIncrease = () => {
    setCount(count + 1);
  };
  const handleClickDecrease = () => {
    setCount(count - 1);
  };
  const handleClickOdd = () => {
    if (count % 2) {
      setCount(count + 1);
    }
  };
  const handleClickAsync = () => {
    setTimeout(() => setCount(count + 1), 1000);
  };

  const handleTimer = () => {
    if (!timer) {
      timer = setInterval(() => setCount((count) => count + 1), 1000);
      setStartButtonText("Stop");
    } else {
      clearInterval(timer);
      timer = null;
      setStartButtonText("Start");
    }
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClickIncrease}>+</button>
      &nbsp;
      <button onClick={handleClickDecrease}>-</button>
      <div>
        <button onClick={handleClickOdd}>Increment If Odd</button>
        <button onClick={handleClickAsync}>Async Increase</button>
      </div>
      Timer:
      <div>
        <button onClick={handleTimer}>{startButtonText}</button>
      </div>
    </>
  );
}
