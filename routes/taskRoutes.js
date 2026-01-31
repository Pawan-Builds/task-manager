const express = require('express');
const router = express.Router();

let tasks = [];
let currentId = 1;

// Helper function to find task index
function findTaskIndex(id) {
    return tasks.findIndex(task => task.id === id);
}

// GET all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

// GET single task by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json(task);
});

// POST create new task
router.post('/', (req, res) => {
    const { title } = req.body;
    
    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'Title is required' });
    }
    
    const task = {
        id: currentId++,
        title: title.trim(),
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.push(task);
    res.status(201).json(task);
});

// PUT update task by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = findTaskIndex(id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    
    const { title, completed } = req.body;
    
    // Update only provided fields
    if (title !== undefined) {
        tasks[index].title = title.trim();
    }
    
    if (completed !== undefined) {
        tasks[index].completed = completed;
    }
    
    res.json(tasks[index]);
});

// DELETE task by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = findTaskIndex(id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    
    const deletedTask = tasks.splice(index, 1)[0];
    res.json(deletedTask);
});

// DELETE all tasks (optional)
router.delete('/', (req, res) => {
    const count = tasks.length;
    tasks = [];
    res.json({ message: `Deleted ${count} tasks` });
});

module.exports = router;
