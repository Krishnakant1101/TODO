import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    Tasks: [
        
    ]
}

export const TodoCounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        Increment: (state) => {
            state.count += 1;
        },

        Decrement: (state) => {
            state.count -= 1;
        },
        CreateNewTask: (state, action) => {

            state.Tasks.push(action.payload);

        }

    }
})


export const { Increment, Decrement, CreateNewTask } = TodoCounterSlice.actions;

export default TodoCounterSlice.reducer;
