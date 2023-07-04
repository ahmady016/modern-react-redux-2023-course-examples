import React from 'react'
import TasksContextProvider from './TasksContext'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const TasksPage: React.FC = () => {
	return (
		<TasksContextProvider>
			<h4>Tasks Page</h4>
			<TaskForm />
            <TaskList />
		</TasksContextProvider>
	)
}

export default TasksPage
