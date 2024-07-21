import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    isCompleted : {
        type : Boolean,
        required : true
    }
})

const Todo = mongoose.models.todo || mongoose.model("todo",todoSchema);

export default Todo;