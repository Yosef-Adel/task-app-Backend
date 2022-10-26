const express = require('express')

const router = express.Router()
const {getAllTasks,createTask,deleteTask,updateTask,getSingleTask} = require('../controllers/tasks')
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').delete(deleteTask).patch(updateTask).get(getSingleTask)

module.exports= router
