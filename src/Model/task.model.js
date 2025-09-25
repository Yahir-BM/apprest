const { randomUUID } = require("crypto");

const task = [
    {id: randomUUID (), title: "Prender API Rest", complete: false},
    {id: randomUUID (), title: "Utilizar MVC en API Rest", complete: false}
]

function findAll() {
    return task;
}

function addTask(title) {
    const newtask = {
        id: randomUUID(),
        title: title,
        complete: false
    };
    task.push(newtask);
    return newtask;
}

function removeTask(id) {
    const index = task.findIndex(item => item.id === id);
    if (index===-1)
        return false;
    task.splice(index, 1);
    return true;
}

//Para buscar por id
function findId(id) {
    return task.find(item => item.id === id) || null;
}

//Para actualizar el titulo de una tarea
function updateTitle(id, newTitle) {
    const taskk = task.find(item => item.id === id);
    if (!taskk) return null;
    taskk.title = newTitle;
    return taskk
} 

module.exports = { findAll, addTask, removeTask, findId, updateTitle};
