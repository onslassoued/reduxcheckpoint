import { configureStore } from "@reduxjs/toolkit";
import taskreducer from './redux/slices/tasksslice'
export const store= configureStore ({
    reducer:{
   taskreducer
    }
})