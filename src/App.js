import Counter from "./Counter";
import TdList from "./TdList";
import { useState } from "react";

export default function App() {
  const [counterChecked, setCounterChecked] = useState(false);
  const [todoChecked, setTodoChecked] = useState(false);

  const handleCounterChange = (e) => {
    if (e.target.checked) {
      setCounterChecked(true);
    } else {
      setCounterChecked(false);
    }
  };

  const handleTodoChange = (e) => {
    if (e.target.checked) {
      setTodoChecked(true);
    } else {
      setTodoChecked(false);
    }
  };

  return (
    <div className="App">
      <div>
        <input type="checkbox" onChange={handleCounterChange} />
        Counter
      </div>
      <div>
        <input type="checkbox" onChange={handleTodoChange} />
        To-Do-List
      </div>
      {counterChecked && <Counter />}
      {todoChecked && <TdList />}
    </div>
  );
}
