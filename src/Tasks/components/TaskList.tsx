/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { useGetTasks } from '../tasksApi'
import { TaskListProps } from '../types'

import { MaterializeSpinner } from '../../components/MaterializeSpinner'
import TaskItem from './TaskItem'

const TaskList: React.FC<TaskListProps> = ({ setSelectedTask }) => {
	const { isLoading, isError, error, data: tasks } = useGetTasks()
	if (isLoading)
		return <MaterializeSpinner />
	else if (isError)
		return (
			<div className="card-panel red darken-4">
				<p className="white-text">Error: {error?.message}</p>
			</div>
		)
	else if (tasks)
		return (
			<ul className="collection with-header">
				<li className="collection-header">{tasks.length} Tasks</li>
				{tasks.map(task => (
					<TaskItem
						key={task.id}
						task={task}
						setSelectedTask={setSelectedTask}
					/>
				))}
			</ul>
		)
	else
		return null
}

export default TaskList
