import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const Todo = ({ todos, removeTodo, checkTodo }) => {

    return todos.map((todo) => (
        <div key={todo.id}>
            <div >
                {todo.text}
                <input type="checkbox" onChange={() => { checkTodo(todo.id, !todo.checked, todo.text) }} checked={todo.checked}
                />

            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
            </div>
        </div>
    ));
};

export default Todo;