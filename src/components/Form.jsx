import React from "react";
import { useState } from "react";

function Form({ newTodo, setNewTodo, todos, setTodos }) {
  function handlerInputChange(event) {
    setNewTodo(event.target.value);
  }

  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        text: newTodo,
        isCompleted: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setNewTodo("");
  };

  return (
    <form autoComplete="off" onSubmit={submitTodoHandler}>
      <div className="form-box">
        <div className="form-check">
          <input type="checkbox" />
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
