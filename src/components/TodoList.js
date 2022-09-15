import React, {useState} from 'react'
import TodoForm from './TodoForm'


function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodos = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos)
        console.log(...todos)
    }

  return (
    <div>
        <h1>Quais Seus planos para hoje?</h1>

        <TodoForm onSubmit={addTodos}/>

    </div>
  )
}

export default TodoList