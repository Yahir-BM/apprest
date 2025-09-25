const Task = require('../Model/task.model')

exports.findAll = (req, res) => {
    const data = Task.findAll();
    res.status(200).json(data);
}

exports.addTask = (req, res) => {
    const title = req.body.title;
    const createdTask = Task.addTask(title);
    res.status(201).json(createdTask);
}

exports.removeTask = (req, res) => {
    const id = req.params.id;
    const ok = Task.removeTask(id);
    if (!ok){
            return res.status(404).json({message: "Tarea no encontrada"})
    }
    return 
}
