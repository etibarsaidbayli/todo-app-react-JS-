import React from "react";
import TodoItem from "./TodoItem";
function Todolist({
  todos,
  setTodos,
  setStatus,
  filteredTodos,
  clearComplted,
}) {
  const statusHandler = (event) => {
    let innerText = event.target.innerText;
    setStatus(innerText);
  };

  return (
    <div className="todolist">
      <ul className="todolist-wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            text={todo.text}
            id={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
      <div className="details-box">
        <div className="items-left-box">
          <span>{todos.filter((a) => a.isCompleted === false).length}</span>
          <span> items left</span>
        </div>
        <div className="status-box">
          <span onClick={statusHandler}>All</span>
          <span onClick={statusHandler}>Active</span>
          <span onClick={statusHandler}>Completed</span>
        </div>
        <div onClick={clearComplted} className="clear-box">
          <span>Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
