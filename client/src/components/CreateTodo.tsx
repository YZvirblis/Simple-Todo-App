import axios from 'axios'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { createTodo } from '../tools/apiController'

interface iProps {
  getTodos: () => Promise<void>
}

function CreateTodo(props: iProps) {
    const [todoContent, setTodoContent] = useState<string>("")
    const [isLoading, setisLoading] = useState(false)
    const [textCount, setTextCount] = useState(0)

    const postTodo = async () => {
        setisLoading(true)
        try{
            await createTodo(todoContent)
        }catch(err:any) {console.log(err)}
        setTodoContent("")
        setisLoading(false)
        props.getTodos()
    }
  return (
    <div className='w-full md:w-1/2 h-64 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 p-5 flex flex-col justify-center content-center text-center items-center postBtn text-right border-solid border-2 border-blue-300 rounded-xl'>
        <textarea name="todo" id="s4tsdfg" cols={30} rows={10} style={{resize: "none", overflow:'hidden'}} className="m-3 p-3 w-full gloria rounded-lg" onChange={(e) => {setTodoContent(e.target.value); setTextCount(todoContent.length)}} value={todoContent}></textarea>
        {textCount > 255 ? <span className='text-red-500 mb-3 self-end'>255 characters max!</span> : null}
        <button className='bg-green-300 hover:bg-green-400 gloria disabled:bg-gray-200 transition-all duration-300  rounded w-full justify-self-center text-xl h-20' onClick={() => postTodo()} disabled={!isLoading && todoContent !== "" && textCount < 255  ? false : true}>add todo</button>
    </div>
  )
}

export default CreateTodo