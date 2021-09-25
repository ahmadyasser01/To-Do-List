import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form';
import ToDoList from './components/todolist';
function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setstatus] = useState("All")
  const [filtredTodos, setFiltertedTodos] = useState([])

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFiltertedTodos(todos.filter(td => td.completed === true))
        break;
      case "uncompleted":
        setFiltertedTodos(todos.filter(td => td.completed === false))
        break;
      default:
        setFiltertedTodos(todos)
    }

  }

  const saveToLocalStorage = () => {

    localStorage.setItem("todos", JSON.stringify(todos))


  };
  const getSavedTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    }
    else {
      let savedTodos = JSON.parse(localStorage.getItem("todos"))
      console.log(savedTodos);
      setTodos(savedTodos);
    }
  }
  useEffect(() => {
    getSavedTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveToLocalStorage()

  }, [todos, status])


  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>

      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        status={status}
        setstatus={setstatus}

      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        status={status}
        setstatus={setstatus}
        filtredTodos={filtredTodos}
        filterHandler={filterHandler}
      />
    </div>
  );
}

export default App;
