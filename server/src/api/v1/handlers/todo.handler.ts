const pool = require("../../../db")
import Todo from "../models/todo"

const createTodo = async (description: any) => {
    try{
        // CREATE DOCUMENT IN MONGO
        await new Todo({description}).save()
        // CREATE DOCUMENT IN POSTGRES
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description])
        return newTodo.rows[0]
    }catch(err){
        console.error(err)
    }
  };

const getAllTodos = async () => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo")
        return allTodos.rows
    }catch(err){
        console.error(err)
    }
  };

const editTodo = async (id: any, description: string) => {
    try{
        const updatedTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description,id])
        return "updated successfully!"
    }catch(err){
        console.error(err)
    }
  };

const delteTodo = async (id: any) => {
    try{
        const deletedTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
        return "deleted successfully!"
    }catch(err){
        console.error(err)
    }
  };
  
  export { createTodo ,getAllTodos, editTodo , delteTodo};
