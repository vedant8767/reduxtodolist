import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {

  const todos = useSelector(state => state.todos)

  return (
    <div>
        <h1 className='text-emerald-300 text-3xl'>Todo Application</h1>
        <TodoForm/>
        {todos.length>0
        ?(todos.map(
          (todo)=><TodoItem key={todo.id} todo={todo}/>))
        :"Add Some Task"}
    </div>
  )
}

export default App
