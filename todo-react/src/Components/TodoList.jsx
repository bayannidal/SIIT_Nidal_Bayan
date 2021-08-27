import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList() {
    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        const response = await fetch('http://localhost:3000/todos')
        const todos = await response.json();
        setTodos(todos)
    }

    const addTodo = todo => {
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });

        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    }

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log('http://localhost:5000/posts' + id)

        setTodos(removedArr);
    };



    const checkTodo = async (id, checked, text) => {
        const updatedTodo = await fetch(`http://localhost:3000/todos/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "text": text,
                "checked": checked

            })

        })

        getTodos()
        console.log(checked)
        console.log(updatedTodo)

    }

    useEffect(() => {
        getTodos();
    }, [])

    return (<div>
        <TodoForm onSubmit={addTodo} />
        <Todo
            todos={todos}
            getTodos={getTodos}
            addTodo={addTodo}
            removeTodo={removeTodo}
            checkTodo={checkTodo}
        />
    </div>

    )
}
