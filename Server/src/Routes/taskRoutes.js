const express = require('express');
const router = express.Router();
const authenticate = require('../Middleware/Auth');
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../Controllers/taskController');

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retrieve a list of all tasks
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Tasks
 *     responses:
 *       200:
 *         description: List of all tasks.
 *       401:
 *         description: Unauthorized. Token is missing or invalid.
 */
router.get('/', authenticate, getAllTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Retrieve a task by ID
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task to retrieve.
 *     responses:
 *       200:
 *         description: Task details.
 *       404:
 *         description: Task not found.
 */
router.get('/:id', authenticate, getTaskById);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               num:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               writername:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created successfully.
 *       400:
 *         description: Bad request. Title is required.
 */
router.post('/', authenticate, createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update an existing task
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               num:
 *                type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               writername:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task updated successfully.
 *       404:
 *         description: Task not found.
 */
router.put('/:id', authenticate, updateTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task to delete.
 *     responses:
 *       200:
 *         description: Task deleted successfully.
 *       404:
 *         description: Task not found.
 */
router.delete('/:id', authenticate, deleteTask);


module.exports = router;
