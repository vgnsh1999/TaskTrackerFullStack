const Task = require("../models/Task");
const User = require("../models/User");
require("dotenv").config();

const addTask = async (req, res, next) => {
  try {
    const { title, description, date, priority, status } = req.body;
    console.log(title, description, date, priority, status);
    if (title === undefined || title.length === 0) {
      return res
        .status(400)
        .json({ message: "Parameters are missing", success: false });
    }
    const task = new Task({
      title: title,
      description: description,
      date: date,
      priority: priority,
      status: status,
      userId: req.user._id,
    });
    await task.save();
    res.status(201).json({ newTaskAdded: task, success: true });
  } catch (error) {
    return res.status(500).json({ message: error, success: false });
  }
};

const getTask = async (req, res, next) => {
  try {
    const tasks = await Task.find({ userId: req.user._id });
    res.status(200).json({ allTasks: tasks, success: true });
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(500).json({ message: error, success: false });
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const taskID = req.params.id;
    if (taskID === undefined || taskID.length === 0) {
      return res
        .status(400)
        .json({ message: "Task ID is missing", success: false });
    }
    const taskToBeDeleted = await Task.find({ _id: taskID });

    const noofrows = await Task.deleteOne({ _id: taskID });
    if (noofrows === 0) {
      return res.status(404).json({ message: "task doesnot belongs to user" });
    }
    res.status(200).json({ message: "Deleted Successfully", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error, success: false });
  }
};

module.exports = {
  addTask,
  getTask,
  deleteTask,
};
