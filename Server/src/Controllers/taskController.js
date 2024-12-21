const Task = require('../Models/taskSchema');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found.' });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { num, title, description, writername } = req.body;
    if (!title) return res.status(400).json({ message: 'Title is required.' });

    const newTask = new Task({ num, title, description, writername });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { num, title, description, writername } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { num, title, description, writername },
      { new: true }
    );
    if (!updatedTask) return res.status(404).json({ message: 'Task not found.' });
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found.' });
    res.status(200).json({ message: 'Task deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.', error: err.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
