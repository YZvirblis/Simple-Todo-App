import axios from "axios"

const createTodo = async (description: string) => {
    const res = await axios.post("/todo/create",{description, isDone:false})
}

const getAllTodos = async () => {
    const res = await axios.get("/todo/gettodos")
    return (res.data)
}
const editTodo = async (todo: any, description: string, isDone: boolean) => {
    const res = await axios.put(`todo/edit/${todo}`, {description,isDone})
}

const deleteTodo = async (todo: any) => {
    console.log("HERE")
    const res = await axios.delete(`todo/delete/${todo}`)
}

export {createTodo, getAllTodos, editTodo, deleteTodo}