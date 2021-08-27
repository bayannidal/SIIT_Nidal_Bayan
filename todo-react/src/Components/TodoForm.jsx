import React, { useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        props.onSubmit({
            text: input
        });
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input
                placeholder='Add a todo'
                value={input}
                onChange={handleChange}
                name='text'
            />
            <button onClick={handleSubmit} className='todo-button'>
                Add todo
            </button>
        </form>
    );
}

export default TodoForm;