const router = require("express").Router();
const controller = require('../controllers/tasksController');

router.get("/api/tasks", controller.index);
router.post("/api/tasks", controller.add);
router.put("/api/tasks/:id", controller.edit);
router.get("/api/tasks/:id", controller.task);
router.delete("/api/tasks/:id", controller.delete);
router.delete("/api/tasks/clear", controller.delete);
router.put("/api/tasks/:id/toggle", controller.toggleCompleted);


module.exports = router;