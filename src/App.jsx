import './App.css'
import Todo from './components/Todo.jsx'
import AddTodo from './components/AddTodo.jsx'

function App() {

  return (
    <>
     <h1 className='text-3xl font-bold font-'>Learn About Redux</h1>
     <AddTodo />
     <Todo />
    </>
  )
}

export default App
