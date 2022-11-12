import React, { Dispatch, SetStateAction, useState } from 'react'
import { deleteTodo, editTodo } from '../tools/apiController'
import Button from './Button'
import DeleteIcon from '@mui/icons-material/Delete';

interface todoProps {
    id: Number
    description:string
    isDone: boolean
    getTodos: () => void
}

function Todo(props:todoProps) {
    const [conditionalStyle, setConditionalStyle] = useState("")

    const changeCompletion = async () => {
        const res = await editTodo(props.id ,props.description, !props.isDone)
        props.getTodos()
    }
    
    const deleteThisTodo = async () => {
        setConditionalStyle("animate-ping")
        setTimeout(async () => {
            const res = await deleteTodo(props.id)
            props.getTodos()
        }, 875);

    }

  return (
    <div className={`w-80 h-fit border-0 hover:border-4 border-solid ${props.isDone ? "border-green-200" : "border-yellow-200"} indie rounded m-3 cursor-pointer transition-all duration-300 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 ${conditionalStyle}`} >
    <div className={`${props.isDone ? "bg-green-400" : "bg-yellow-400"} rounded p-5 shadow-lg w-full h-full flex flex-col break-words`} onClick={() => changeCompletion()}>
        <p className='gloria'>{props.description}</p>
    </div>
        <div className='flex flex-row justify-around items-center p-2'>
        <Button iconComponent={DeleteIcon} callback={deleteThisTodo}/>
        </div>
    </div>
  )
}

export default Todo