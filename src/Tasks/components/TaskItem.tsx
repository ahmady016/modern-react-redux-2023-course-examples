/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Swal from 'sweetalert2'

import { TaskItemProps, taskColors } from '../types'
import { useTasksContext } from '../TasksContext'
import { useDeleteTask } from '../tasksApi'

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
	const { setSelectedTask } = useTasksContext()
	const handleEdit = React.useCallback(() => void setSelectedTask(task), [task])
	const { deleteTaskAsync, isDeletedTaskLoading } = useDeleteTask()
	const handleRemove = React.useCallback(async () => {
		try {
			const deletedTask = await deleteTaskAsync(task.id)
			console.log("🚀: TaskItem -> handleRemove -> deletedTask", deletedTask)
			Swal.fire('Succeeded', `Task with Id: ${task.id} was deleted successfully`, 'success')
		} catch (error) {
			console.log("🚀: TaskItem -> handleRemove -> deletedTaskError:", error)
			Swal.fire('Oops...', 'something went wrong when deleting the task', 'error')
		}
	}, [task])

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
				<p>Created At: {task.createdAt.split('T')[0]}</p>
				<p>Completed At: {task.completedAt}</p>
			</div>
            <div className={`card-panel ${taskColors[task.priority]} flex-between`}>
				<p>Due Date: {task.dueDate}</p>
                <p>Priority: {task.priority}</p>
            </div>
			<div className="secondary-content mt--05">
				<button
					type="button"
					className="btn-floating grey lighten-3 mr-1"
					onClick={handleEdit}
				>
					<i className="material-icons green-text darker-4">create</i>
				</button>
				<button
					type="button"
					className={`btn-floating grey lighten-3 ${isDeletedTaskLoading ? 'pulse' : ''}`}
					onClick={handleRemove}
				>
					<i className="material-icons red-text darker-4">delete</i>
				</button>
			</div>
		</li>
	)
}

export default TaskItem
