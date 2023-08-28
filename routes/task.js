const express = require("express");
const userauthentication = require("../middleware/auth");

const router = express.Router();

const taskController = require("../controllers/taskcontrollers");

router.post(
  "/add-task",
  userauthentication.authenticate,
  taskController.addTask
);

router.get(
  "/get-task",
  userauthentication.authenticate,
  taskController.getTask
);

// router.get('/get-expense/page2', userauthentication.authenticate, expenseController.getExpenseOnPage2);

router.delete(
  "/delete-task/:id",
  userauthentication.authenticate,
  taskController.deleteTask
);

module.exports = router;
