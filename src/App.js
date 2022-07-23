import "./App.css";

import sun from "./assets/img/icon-sun.svg";
import moon from './assets/img/icon-moon.svg'

import Form from "./components/Form";
import Todolist from "./components/Todolist";

import { useState, useEffect } from "react";
import { useRef } from "react";


function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);

  const imageRef=useRef()
  const headerRef=useRef()
    let  theme = "light"
  const handlerIconClick = () => {

    if(theme=="light") {
      imageRef.current.src=`${moon}`
      theme='dark'
      headerRef.current.style.backgroundImage="url('https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
      document.body.style.backgroundColor='white'
      

   console.log(headerRef.current)
    }else {
      imageRef.current.src=`${sun}`
      theme="light"
      headerRef.current.style.backgroundImage="url('https://images.unsplash.com/photo-1616419232319-d1b7b92dca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
      document.body.style.backgroundColor='black'
    } 
   
    
   

  }


  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalodos();
  }, [todos, status]);

  const saveLocalodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("itemsCount", JSON.stringify(itemsCount));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
      localStorage.setItem("itemsCount", JSON.stringify(0));
    } else {
      const savedTodos = JSON.parse(localStorage.getItem("todos"));
      const itemsCount = JSON.parse(localStorage.getItem("itemsCount"));
      setTodos(savedTodos);
      setItemsCount(itemsCount);
    }
  };

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

  const clearComplted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div className="App">
      <header ref={headerRef} className="header">
        <div className="container">
          <div className="head">
            <h1 className="header-title">Todo App</h1>
            <div onClick={handlerIconClick} className="sunAndMoon">
              <img ref={imageRef}  src={sun} alt="" />
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
            itemsCount={itemsCount}
            setItemsCount={setItemsCount}
            saveLocalodos={saveLocalodos}
            getLocalTodos={getLocalTodos}
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
            clearComplted={clearComplted}
            itemsCount={itemsCount}
            setItemsCount={setItemsCount}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
