/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { TaskItemProps } from '../types'

const TaskItem: React.FC<TaskItemProps> = ({
	task,
	removeTask,
	setSelectedTask,
}) => {
	const handleEdit = React.useCallback(() => void setSelectedTask(task), [task])
	const handleRemove = React.useCallback(() => void removeTask(task), [task])

	return (
		<li key={task.id} className="collection-item avatar">
			<img
				className="circle"
				src={`https://picsum.photos/seed/${task.id}/200`}
				alt={task.title}
			/>
			<span className="title">{task.title}</span>
			<p>{task.description}</p>
			<div className="flex-between">
				<p>Created At: {task.createdAt}</p>
				<p>Completed At: {task.completedAt}</p>
			</div>
            <div className="flex-between">
				<p>Due Date At: {task.dueDate}</p>
                <p>Priority: {task.priority}</p>
            </div>
			<span className="secondary-content">
				<i
					className="material-icons green-text darker-4 pointer"
					onClick={handleEdit}
				>
					create
				</i>
				<i
					className="material-icons red-text darker-4 pointer"
					onClick={handleRemove}
				>
					delete
				</i>
			</span>
		</li>
	)
}

export default TaskItem
