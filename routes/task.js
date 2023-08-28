const express = require("express");
const userauthentication = require("../middleware/auth");

const router = express.Router();

const taskController = require("../controllers/taskcontrollers");

router.post(
  "/add-task",
  userauthentication.authenticate,
  expenseController.addTask
);

router.get(
  "/get-task",
  userauthentication.authenticate,
  expenseController.getTask
);

// router.get('/get-expense/page2', userauthentication.authenticate, expenseController.getExpenseOnPage2);

router.delete(
  "/delete-task/:id",
  userauthentication.authenticate,
  expenseController.deleteTask
);

module.exports = router;
