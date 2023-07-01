/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { TaskListProps } from '../types'
import TaskItem from './TaskItem'

const TaskList: React.FC<TaskListProps> = ({
	tasks,
	removeTask,
	setSelectedTask,
}) => {
	return (
		<ul className="collection with-header">
			<li className="collection-header">{tasks.length} Tasks</li>
			{tasks.map(task => (
				<TaskItem
					key={task.id}
					task={task}
					removeTask={removeTask}
					setSelectedTask={setSelectedTask}
				/>
			))}
		</ul>
	)
}

export default TaskList
