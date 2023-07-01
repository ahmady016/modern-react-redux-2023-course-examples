import React from 'react'

import { Task, defaultTask } from './types'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const TasksPage: React.FC = () => {
	const [tasks, setTasks] = React.useState<Task[]>([])
	const [selectedTask, setSelectedTask] = React.useState<Task>(defaultTask)

	const createTask = React.useCallback((newTask: Task) => {
		setTasks((tasks) => [...tasks, newTask])
	}, [])
	const updateTask = React.useCallback((updatedTask: Task) => {
		setTasks(tasks => tasks.map(task => task.id === updatedTask.id ? updatedTask : task))
	}, [])
	const removeTask = React.useCallback((removedTask: Task) => {
		setTasks(tasks => tasks.filter(task => task.id !== removedTask.id ))
	}, [])

	return (
		<>
			<h4>Tasks Page</h4>
			<TaskForm task={selectedTask} createTask={createTask} updateTask={updateTask} />
            <TaskList tasks={tasks} removeTask={removeTask} setSelectedTask={setSelectedTask} />
		</>
	)
}

export default TasksPage
