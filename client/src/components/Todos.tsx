import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { JsxElement } from 'typescript'
import { getAllTodos } from '../tools/apiController'
import Todo from './Todo'

interface todosProps {
  isDone: boolean
  todos: any,
  getTodos: () => void
}

function Todos(props: todosProps) {
  const [render, setRender] = useState<any>(null)

  useEffect(() => {
    renderTodos()
  }, [props.todos])
  

  const renderTodos = () => {
    const renderArray: JSX.Element[] = []
    props.todos.forEach((todo: any) => {
      if(todo.isdone === props.isDone){
        renderArray.push(
          <Todo key={todo.todo_id} id={todo.todo_id} description={todo.description} isDone={props.isDone} getTodos={props.getTodos}/>
          )
        }
    })
    setRender([...renderArray])
  }
  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='font-bold text-2xl gloria'>{props.isDone ? "DONE" : "UNDONE"}</h1>
    <div className='w-full flex flex-wrap justify-between' >
    {render}
    </div>
    </div>
  )
}


export default Todos