import React from "react";

const Todo = ({ text, setTodos, todos, todo }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(td => td.id !== todo.id))

    }

    const completeHandler = () => {
        setTodos(todos.map(td => td.id === todo.id ? { ...td, completed: !td.completed } : td))
    }



    return (
        <div className="todo">
            <li key={todo.id} className={`todo-item  ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button
                onClick={completeHandler}
                className="complete-btn "><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>

        </div>
    )
}

export default Todo