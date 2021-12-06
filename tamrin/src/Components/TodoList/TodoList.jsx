import "./TodoList.css";
import Todo from "../Todo/Todo";

const TodoList = ({ todos }) => {
  if (!todos.length) return <div className="todolist">List Is Empty !</div>;

  
  return todos.map((todo) => <Todo key={todo.id} todo={todo} />);
};
export default TodoList;
