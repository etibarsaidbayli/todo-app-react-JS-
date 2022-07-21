import React from "react";

function TodoItem({ id, text, todos, setTodos, todo }) {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={todo.isCompleted  ? "list-box completed" : "list-box"}>
      <div className="li-box">
        <div className="form-check li-check">
          <input defaultChecked={todo.isCompleted}
           onChange={completedHandler} type="checkbox" />
        </div>
        <li className="list-item">{text}</li>
      </div>
      <button onClick={deleteHandler} className="trashBtn">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default TodoItem;
