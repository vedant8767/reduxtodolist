import { useState } from "react";
import {updateTodo,removeTodo,toggleTodo,updatestateid,istodoupdatecheck} from "../features/todoSlice";
import {useSelector,useDispatch} from 'react-redux'

export default function TodoItem({todo}){
        
    // const [updateMsg,setUpdateMsg] = useState()

    // let updatetext = useSelector(state=>state.updatetext)
    // const todos = useSelector(state => state.todos)
    // const dispatch = useDispatch()

    // const update = ()=>{
    //     console.log("click")
    //     updatetext=!updatetext
    //     dispatch(updateinput())
    //     console.log(updatetext)
    // }
    const dispatch = useDispatch()
    const idtoupdate = useSelector(state => state.idtoupdate)
    const istodoupdate = useSelector(state => state.istodoupdate)

    const updatestate = ()=>{
        dispatch(updatestateid(todo.id))
        dispatch(istodoupdatecheck())
    }

    return(
            <div className="flex  mt-5 bg-pink-100 p-2 rounded-sm text-2xl font-semibold w-6/12 ">
                <div className="text-violet-500 flex justify-center ml-9">
                    {todo.text}
                </div>
                <button className="ml-7" onClick={updatestate}>✏️</button>
                {/* <button onClick={update}>update</button> */}
                <button className="bg-red-300 w-10 rounded-sm ml-7" onClick={()=>dispatch(removeTodo(todo.id))}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2"
                    >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                    </svg>
                </button>
            </div>
        )
}