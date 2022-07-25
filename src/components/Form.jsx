import React from "react";
import { useRef } from "react";

function Form({
  newTodo,
  setNewTodo,
  todos,
  setTodos,
  saveLocalodos,
  getLocalTodos,
}) {
  const checkboxRef = useRef();

  function handlerInputChange(event) {
    setNewTodo(event.target.value);
  }

  const submitTodoHandler = (event) => {
    event.preventDefault();
    if (!newTodo.trim()) {
      return;
    }
    setTodos([
      ...todos,
      {
        text: newTodo,
        isCompleted: checkboxRef.current.checked,
        id: Math.floor(Math.random() * 1000),
      },
    ]);

    setNewTodo("");
    checkboxRef.current.checked = false;
  };

  return (
    <form autoComplete="off" onSubmit={submitTodoHandler}>
      <div className="form-box">
        <div className="form-check form-check-form">
          <input ref={checkboxRef} type="checkbox" />
        </div>
        <div className="form-text-box">
          <input
            value={newTodo}
            onChange={handlerInputChange}
            type="text"
            placeholder="create a new todo"
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
