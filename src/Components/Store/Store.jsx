import {configureStore} from '@reduxjs/toolkit';
import counterReducers from '../CounterSlice/CounterSlice';
export const Store=configureStore({
    reducer:{
        count:counterReducers,
    },
})