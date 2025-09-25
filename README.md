Durante el desarrollo tuve ciertos problemas que si me dificultaron el avance del trabajo.

- Conflictos de declaración de variables y uso de crypto:
Se corrigieron los nombres de variables duplicadas y se reemplazó el módulo incorrecto node.crypto por crypto nativo de Node.js.
Se implementó una función randomID() para generar identificadores únicos de manera correcta.

- Errores en app.js y en la exportación de modelos:
Se corrigió modele.exports a module.exports.
Se corrigieron errores de tipografía como procces.env.PORT a process.env.PORT.

- Problemas con rutas GET, PUT y PATCH:
Se solucionó el problema del “Cannot PUT /api/task/:id” ajustando el orden de las rutas en Express. Las rutas generales (/:id) deben ir al final para no interferir con las rutas PUT o PATCH.
Se aseguró que express.json() se cargara antes de las rutas para leer correctamente req.body.

- Implementación de nuevas funcionalidades:
Se agregaron controladores y funciones de modelo para consultar por id, actualizar título y completar/desacompletar tareas siguiendo la misma estructura del proyecto inicial.
Se verificó que todas las operaciones CRUD funcionen correctamente desde Insomnia y la terminal.

Y esos fueron los problemas que tuve durante el desarrollo de la actividad.
