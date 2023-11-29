import { createSlice } from "@reduxjs/toolkit";




export const tasksslice=createSlice({
    name:"task",
    initialState:{
       list:[{name:"cleaning",isDone:true}]
    },
    reducers:{
        addTask:(state,action)=>{
            state.list.push(action.payload)
        }
    }
})

export const {addTask} = tasksslice.actions

export default tasksslice.reducer
