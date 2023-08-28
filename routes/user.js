const express = require("express");

const router = express.Router();

const userController = require("../controllers/usercontrollers");
// const taskController = require('../controllers/taskcontrollers');

// const authenthicatemiddleware = require('../middleware/auth');

router.post("/signup", userController.signup);

router.post("/login", userController.login);

module.exports = router;
