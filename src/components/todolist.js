import React from "react";
import Todo from "./todo";


const ToDoList = ({ todos, setTodos, filtredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filtredTodos.map(todo => (
                    <Todo
                        text={todo.text}
                        id={todo.id}
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        key={todo.id}
                    />
                )

                )}
            </ul>
        </div>

    )
}

export default ToDoList