import React, { useEffect, useState } from 'react';
import CreateTodo from './components/CreateTodo';
import axios from 'axios';
import Todos from './components/Todos';
import { getAllTodos } from './tools/apiController';

function App() {
  axios.defaults.baseURL = 'http://localhost:5000/api/v1/';

  const [todos, setTodos] = useState(null)

  const getTodos = async () => {
    const fetchedTodos = await getAllTodos()
    setTodos(fetchedTodos)
  }

  useEffect(() => {
    getTodos()
  }, [])
  
  return (
    <div className='bg-gradient-to-r from-rose-100 to-teal-100 w-screen h-full p-3 items-center flex flex-col'>
      <h1 className='text-6xl m-5 vibes'>Todo App</h1>
      <CreateTodo getTodos={getTodos}/>
      {todos !== null &&
      <div className='flex flex-row justify-between w-full h-full p-5'>
        <Todos todos={todos} isDone={false} getTodos={getTodos}/>
        <div className='bg-indigo-300 rounded h-screen w-1'/>
        <Todos todos={todos} isDone={true} getTodos={getTodos}/>
      </div>
      }
    </div>
  );
}

export default App;
