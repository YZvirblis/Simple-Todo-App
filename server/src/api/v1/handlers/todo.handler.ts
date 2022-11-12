import pool from "../../../db";
import Todo from "../models/todo"

const createTodo = async (description: any) => {
    try{
        // CREATE DOCUMENT IN MONGO
        // CREATE DOCUMENT IN POSTGRES
        const newTodo = await pool.query("INSERT INTO todo (description, isDone) VALUES($1, $2) RETURNING *", [description, false])
        await new Todo({todo_id: newTodo.rows[0].todo_id ,description, isDone:false}).save()
        return newTodo.rows[0]
    }catch(err){
        console.error(err)
    }
  };

const getAllTodos = async () => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo")
        if(!allTodos){
            Todo.find().then((res) => { return res})
        }
        return allTodos.rows
    }catch(err){
        console.error(err)
    }
  };

const editTodo = async (id: any, description: string, isDone: boolean) => {
    try{
        const updatedTodo = await pool.query("UPDATE todo SET description = $1, isDone = $2 WHERE todo_id = $3",[description,isDone, id])
        Todo.findOneAndUpdate({todo_id: id}, {description, isDone})
        return "updated successfully!"
    }catch(err){
        console.error(err)
    }
  };

const deleteTodo = async (id: any) => {
    try{
        const deletedTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
        Todo.findOneAndDelete({$todo_id: id}, (res:any, err:any) => {if(err){console.log(err)}})
        return "deleted successfully!"
    }catch(err){
        console.error(err)
    }
  };
  
  export { createTodo ,getAllTodos, editTodo , deleteTodo};
