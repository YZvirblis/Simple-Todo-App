import mongoose from "mongoose"
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo_id: Number,
    description: {
        type: String,
        required: true
    },
    isDone:{
        type:Boolean,
        required: true
    }
}, { timestamps: true })

const Todo = mongoose.model("Todo", todoSchema);

export default Todo