// In-memory task store
let tasks = [];
let currentId = 1;

// Get all tasks
const getAllTasks = () => {
  return tasks;
};

// Get task by ID
const getTaskById = (id) => {
  return tasks.find(task => task.id === Number(id));
};

// Create new task
const createTask = (title) => {
  const newTask = {
    id: currentId++,
    title,
    completed: false
  };

  tasks.push(newTask);
  return newTask;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask
};
