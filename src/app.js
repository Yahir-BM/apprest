const express = require("express");

const taskRouter = require("./Routes/task.routes");

const app = express();
app.use(express.json());

app.use("/api/task", taskRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running o http://localhost:${PORT}`);
})


//Consulta de una tarea con identificador, actualizar el titulo de una tarea y
//completar y desacompletar una tarea.
