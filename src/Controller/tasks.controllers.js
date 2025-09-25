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

exports.findId = (req, res) => {
    const id = req.params.id;
    const tassk = Task.findId(id);
    if (!tassk) 
        return res.status(404).json({message: "Tarea no encontrada"})
    return res.json(tassk);
}

exports.updateTitle = (req, res) => {
    const id = req.params.id;
    const newTitle = req.body.title;
    if (!newTitle) {
        return res.status(400).json({ message: "Se requiere un título" });
    }
    const updated = Task.updateTitle(id, newTitle);
    if (!updated) 
        return res.status(404).json({message: "Tarea no encontrada"});
    return res.json(updated);
}

exports.completeTask = (req, res) => {
    const id = req.params.id;
    const tassk = Task.completeTask(id);
    if (!tassk)
        return res.status(404).json({message: "Tarea no encontrada"});
    return res.json(tassk);
}

