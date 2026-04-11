import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
    return (
        <>
            <h1>Add a Todo</h1>
            <form onSubmit={handleAddTodo}>
                <input 
                    type="text"
                    placeholder='Enter a Todo Value here'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Add Todo</button>
            </form>
        </>
    )
}

export default AddTodo