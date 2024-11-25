import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    Tasks: [
        {
            Id: "1",
            Title: "title1",
            Discription: "this is a tiletle 1 and many more things "
        }
    ]
}

export const CounterSlice = createSlice({
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
            const NewTask = {
                Id: nanoid(),
                Title: action.payload,
                Discription: "this is a tiletle 1 and many more things "
            }
            state.Tasks.push(NewTask);
        }

    }
})


export const { Increment, Decrement } = CounterSlice.actions;

export default CounterSlice.reducer;
