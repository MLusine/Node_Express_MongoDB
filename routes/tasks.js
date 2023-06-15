import  express  from "express";
import { addTask, deleteTask, getAllTasks, getById, updateTask } from "../controllers/task-controller.js";
const taskRouter = express.Router();

taskRouter.get("/", getAllTasks);
taskRouter.post("/add", addTask);
taskRouter.patch("/update/:id", updateTask);
taskRouter.get("/:id", getById);
taskRouter.delete("/:id", deleteTask)

export default taskRouter;