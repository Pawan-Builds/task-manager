const taskService = require('../services/taskService');

// GET /tasks
const getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

// GET /tasks/:id
const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = taskService.getTaskById(id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
};

// POST /tasks
const createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const newTask = taskService.createTask(title);
  res.status(201).json(newTask);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask
};
