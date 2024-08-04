import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { addTodo,updateTodo,updatestateid,istodoupdatecheck,setupdatemsg} from "../features/todoSlice";
import { useEffect } from "react";


export default function TodoForm(){

    const todos = useSelector(state => state.todos)
    const idtoupdate = useSelector(state => state.idtoupdate)
    const istodoupdate = useSelector(state => state.istodoupdate)
    const updateMsg = useSelector(state => state.updateMsg)
    
    const [TodoMsg,setTodoMsg] = useState('')
   
    const dispatch = useDispatch()

    const addsubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodo(TodoMsg))
        setTodoMsg('')
    }

    const update =(e)=>{
        e.preventDefault()
        dispatch(updateTodo({id:idtoupdate,text:TodoMsg}))
        dispatch(istodoupdatecheck())
        dispatch(setupdatemsg(TodoMsg))
        setTodoMsg('')
    }
    let checkformsubmit=addsubmit

    useEffect(()=>{
        if(!istodoupdate){
            console.log("perform add"); 
            checkformsubmit=addsubmit
        }
        else{
            console.log("perform update");
            checkformsubmit=update
        }
    },[istodoupdate])

    useEffect(()=>{
        if(istodoupdate){
            let msg = ""
            todos.map((todo)=>(
                todo.id==idtoupdate?msg=todo.text:''
            ))
            document.getElementById('todomsg').value=msg
        }
    },[istodoupdate])
    // const update = (e)=>{
    //     e.preventDefault()
    //     dispatch(updateTodo({id:1,text:TodoMsg}))
    // }

    // let updateoradd = addsubmit

    // useEffect(()=>{
    //     console.log(upadtetext)
    //     if(upadtetext){
    //         updateoradd=update
    //         console.log(updateoradd);
    //         document.getElementById('todomsg').value="ved"
    //         dispatch(updateinput())
    //     }
    // },[upadtetext])
 

    return(
        <div className='flex justify-center font-semibold text-pink-400 text-xl mt-10'>
            {/* {upadtetext?updateoradd=update:updateoradd=addsubmit}
            {console.log(updateoradd)} */}
            <form onSubmit={istodoupdate?update:addsubmit}>

                <input 
                className="w-96 p-2"
                id="todomsg" type="text" 
                value={TodoMsg} 
                onChange={(e)=>setTodoMsg(e.target.value)} />

                <button className="ml-5 p-2 bg-violet-300 rounded-md w-30" type="submit">{istodoupdate?'Update Todo':'Add Todo'}</button>

            </form>
        </div>
    )
}