import React from 'react'

import { Task, defaultTask } from './types'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const TasksPage: React.FC = () => {
	const [selectedTask, setSelectedTask] = React.useState<Task>(defaultTask)
	return (
		<>
			<h4>Tasks Page</h4>
			<TaskForm task={selectedTask} />
            <TaskList setSelectedTask={setSelectedTask} />
		</>
	)
}

export default TasksPage
