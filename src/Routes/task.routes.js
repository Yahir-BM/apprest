const { Router } = require("express");

const controller = require("../Controller/tasks.controllers");

const router = Router();

router.get("/", controller.findAll);
router.post("/", controller.addTask);
router.delete("/:id", controller.removeTask);

module.exports = router;
