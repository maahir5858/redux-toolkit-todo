import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, todoMsg: "todo message", completed: false },
        { id: 2, todoMsg: "learn redux", completed: false }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: {
            reducer(state, action) {
                state.todos.push(action.payload);
            },
            prepare(todoMsg, completed) {           // Prepare Callback for the Reducer...
                return {
                    payload: {
                        id: nanoid(),
                        todoMsg,
                        completed
                    }
                }
            }
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;