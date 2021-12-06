
import { useState } from "react";
import Input from "../Input/Input";
import TodoList from "../TodoList/TodoList";
import "./Main.css";

const Main = () => {
    const[todos,setTodos]=useState([]);
   console.log('todos');

  return (
    <div className="main">
      <Input todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} />
    </div>
  );
};
export default Main;
