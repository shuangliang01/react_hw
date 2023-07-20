import { useState } from "react";
import { ItemList } from "./ItemList";

export default function TdList() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(["test"]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSortChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "A-Z") {
      setTodoList([...todoList.sort()]);
    } else {
      setTodoList([...todoList.sort((a, b) => (a < b ? 1 : -1))]);
    }
  };

  const handleClick = () => {
    if (!input) {
      return;
    }
    setTodoList([...todoList, input]);
    setInput("");
  };

  const handleRemove = (i) => {
    setTodoList(todoList.filter((item, index) => index !== i));
  };

  return (
    <div>
      <h2>To Do List</h2>
      <input value={input} onChange={handleInputChange} />
      <button onClick={handleClick}>Add</button>
      &nbsp;
      <select name="sort" id="sort" onChange={handleSortChange}>
        <option value="A-Z">sort A-Z</option>
        <option value="Z-A">sort Z-A</option>
      </select>
      <ItemList item={todoList} handleRemove={handleRemove} />
    </div>
  );
}
