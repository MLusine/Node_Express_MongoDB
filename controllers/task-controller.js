import Task from "../model/Tasks.js";

export const getAllTasks = async (req, res, next) => {
    let tasks;
    try {
        tasks = await Task.find();
    } catch (err) {
        return console.log(err);
    }
    if(!tasks) {
        return res.status(404).json({message: "No Tasks Found"})
    }
    return res.status(200).json({tasks})
}

export const addTask = async (req, res, next) => {
    const { content, deadline } = req.body;
    const task = new Task({
        content,
        deadline,
    });
    try {
      await task.save()
    } catch (err) {
        return console.log(err)
    }
    return res.status(200).json({task})
};

export const updateTask = async (req, res, next) => {
    const { content } = req.body;
    const taskId = req.params.id;
    let task;
    try {
        task = await Task.findByIdAndUpdate(taskId, {content})
    } catch (err){
        return console.log(err)
    }
    if(!task) {
        return res.status(500).json({message: "Unable To Update The Task"});
    }
    return res.status(200).json({task})

}

export const getById = async (req, res, next) => {
    const id = req.params.id;
    let task;
    try {
        task = await Task.findById(id);
    } catch (err) {
        return console.log(err)
    }
    if(!task) {
        return res.status(404).json({message: "No Task Found"});
    }
    return res.status(200).json({task})
};

export const deleteTask = async (req, res, next) => {
    const id = req.params.id;

    let task;
    try {
        task = await Task.findByIdAndRemove(id)
    } catch (err) {
        console.log(err);
    }
    if(!task) {
        return res.status(500).json({message: "Unable To Delete"});
    }
    return res.status(200).json({message: "Successfully Deleted"})
}