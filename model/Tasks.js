import mongoose from "mongoose";

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    }

})

export default mongoose.model("Task", taskSchema)