import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./Input.css";

const Input = ({ todos, setTodos }) => {
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: uuid(), text: todoText, completed: false },
    ];
    setTodos(updatedTodos);
    setTodoText("");
  };

  return (
    <div className="input">
      <input
        className="inputtt"
        placeholder="type..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />

      <button className="button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};
export default Input;
