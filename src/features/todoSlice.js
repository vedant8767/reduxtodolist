import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id:1,
            text:"TodoMsg",
            completed:false,
        }
    ],
    idtoupdate:1,
    istodoupdate:false,
    updateMsg:""
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload,
                completed:false
            }
            state.todos.push(todo)
            console.log(state.todos.length)
        },
        removeTodo:(state,action)=>{
            console.log(action.payload)
            state.todos = state.todos.filter((todo)=>(
                // console.log(todo.id)
                todo.id !== action.payload
            ))
            console.log(state.todos.length);
            
        },
        updatestateid:(state,action)=>{
            state.idtoupdate=action.payload
        },
        istodoupdatecheck:(state,action)=>{
            state.istodoupdate=!state.istodoupdate
        },
        setupdatemsg:(state,action)=>{
            state.updateMsg=action.payload
        },
        updateTodo:(state,action)=>{
            console.log("updatecalled");
            console.log(state.idtoupdate)
            console.log(action.payload.id)
            state.todos.map((todo)=>{
                console.log(todo.text)
            })
            state.todos = state.todos.map((todo)=>(
                todo.id===action.payload.id ?{...todo,text:action.payload.text}:todo
            ))
        },
        toggleTodo:(state,action)=>{
            state.todos = state.todos.map((todo)=>{
                todo.id===action.payload.id ?{...todo,completed:true}:todo
            })
        }
    }
})

export const {addTodo,removeTodo,updateTodo,toggleTodo,updatestateid,istodoupdatecheck,setupdatemsg} = todoSlice.actions

export default todoSlice.reducer