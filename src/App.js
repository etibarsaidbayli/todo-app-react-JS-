import "./App.css";
import sun from "./assets/img/icon-sun.svg";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import { useState, useEffect } from "react";
function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((item) => item.isCompleted === true));
        break;
      case "Active":
        setFilteredTodos(todos.filter((item) => item.isCompleted === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="head">
            <h1 className="header-title">Todo App</h1>
            <div className="sunAndMoon">
              <img src={sun} alt="" />
            </div>
          </div>
        </div>
      </header>
      <div className="section">
        <div className="container">
          <Form
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
      <div className="section">
        <div className="container">
          <Todolist
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
            filteredTodos={filteredTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
