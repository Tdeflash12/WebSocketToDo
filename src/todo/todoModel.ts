import mongoose from "mongoose";
import { ITodo, Status } from "./todoTypes";
const Schema =mongoose.Schema

const todoSchema = new Schema<ITodo>({
    task : String,
    deadline : String,
    status :{
        type : String,
       enum : [Status.completed,Status.pending],
default: Status.pending
    }



})
export default mongoose.model("Todo",todoSchema)