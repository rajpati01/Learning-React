import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TOdoItem'

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
      // setTodos(todo) - this will only update the todo list erasing the previous values if there are.
      // so we can use prev callback which will return the previous state and ...prev will spread it 
      setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] ) 
      }

    const updateTodo = (id, todo) => {
      setTodos((prev) => prev.map((item) => item.id === id ? todo : item))
    } 

    const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((item) => item.id !== id))
    }

    const toggleComplete = (id) => {
      setTodos((prev) => prev.map((item) => item.id === id ? {...item, completed: !item.completed} : item))
    } 

    // Storing the information in local storage
    // useEffect will querey the local storage and list all the todos in the todos (state) first 
    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))

      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [])

    useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    
    
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center m-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {/* {}- must return ()- auto return */}
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
