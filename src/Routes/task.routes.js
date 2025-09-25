const { Router } = require("express");

const controller = require("../Controller/tasks.controllers");

const router = Router();

router.get("/", controller.findAll);
router.post("/", controller.addTask);
router.put("/:id", controller.updateTitle);
router.delete("/:id", controller.removeTask);
router.get("/:id", controller.findId);

module.exports = router;
