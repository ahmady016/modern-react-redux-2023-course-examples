/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Swal from 'sweetalert2'
import M from 'materialize-css'
import { nanoid } from 'nanoid'

import { useCreateTask, useUpdateTask } from '../tasksApi'
import { TaskFormProps, Task, defaultTask, taskPriorities } from '../types'

import { MaterializeSpinner } from '../../components/MaterializeSpinner'

const TaskForm: React.FC<TaskFormProps> = ({ task }) => {
	const [state, setState] = React.useState<Task>(task)
	const onChange = React.useCallback(
		(e: any) => setState((state) => ({ ...state, [e.target.name]: e.target.value })),
	[])

	const { createTaskAsync, isCreatedTaskLoading } = useCreateTask()
	const { updateTaskAsync, isUpdatedTaskLoading } = useUpdateTask()

	// resetting the form state when task prop is changed and reinitialized Materialize Form Select Element
	const PriorityElement = React.useRef<HTMLSelectElement | null>(null)
	React.useEffect(() => {
		setState(task)
		window.setTimeout(() => M.FormSelect.init(PriorityElement.current as HTMLSelectElement), 50)
	}, [task])

	// resetting the form state and reinitialized Materialize Form Select Element
	const resetForm = React.useCallback(() => {
		setState(defaultTask)
		window.setTimeout(() => M.FormSelect.init(PriorityElement.current as HTMLSelectElement), 50)
	}, [])

	// handle form submission be creating or updating the task and resetting the form state and reinitialized Materialize Form Select Element
	const handleSubmit = React.useCallback(async (e: any) => {
		e.preventDefault()
		if(state.id) {
			try {
				const updatedTask = await updateTaskAsync(state)
				console.log("🚀: TaskForm -> handleSubmit -> updatedTask:", updatedTask)
				Swal.fire('Succeeded', `Task with Id: ${state.id} was updated successfully`, 'success')
				resetForm()
			} catch (error) {
				console.log("🚀: TaskForm -> handleSubmit -> updatedTaskError:", error)
				Swal.fire('Oops...', 'something went wrong when updating the task', 'error')
			}
		}
		else {
			state.id = nanoid(12)
			state.createdAt = new Date().toISOString()
			try {
				const createdTask = await createTaskAsync(state)
				console.log("🚀: TaskForm -> handleSubmit -> createdTask:", createdTask)
				Swal.fire('Succeeded', `Task with Id: ${state.id} was created successfully`, 'success')
				resetForm()
			} catch (error) {
				console.log("🚀: TaskForm -> handleSubmit -> createdTaskError:", error)
				Swal.fire('Oops...', 'something went wrong when creating the task', 'error')
			}
		}
	}, [state])

	return (
		<form className="w-80 mx-auto row" onSubmit={handleSubmit}>
			<div className="input-field col s6">
				<label htmlFor="title" className="active">Title</label>
				<input
					className="w-100"
					type="text"
					name="title"
					placeholder="Type a Title"
					value={state.title}
					onChange={onChange}
				/>
			</div>
			<div className="input-field col s6">
				<label htmlFor="priority" className="active">Priority</label>
				<select ref={PriorityElement} name="priority" value={state.priority} onChange={onChange}>
					<option value="">Choose Priority</option>
					{taskPriorities.map((priority) =>
						<option key={priority} value={priority}>{priority}</option>
					)}
				</select>
			</div>
			<div className="input-field col s12">
				<label htmlFor="description" className="active">Description</label>
				<textarea
					className="materialize-textarea w-100"
					name="description"
					placeholder="Type a Description"
					value={state.description}
					onChange={onChange}
				/>
			</div>
			<div className="input-field col s6">
				<label htmlFor="dueDate" className="active">Due Date</label>
				<input
					type="date"
					name="dueDate"
					placeholder="Due Date"
					value={state.dueDate}
					onChange={onChange}
				/>
			</div>
			<div className="input-field col s6">
				<label htmlFor="completedAt" className="active">Completed At</label>
				<input
					type="date"
					name="completedAt"
					placeholder="Completed At"
					value={state.completedAt}
					onChange={onChange}
				/>
			</div>
			<div className="input-field col s12 flex-between">
				<button
					type="submit"
					className="btn waves-effect waves-light w-40"
					disabled={isCreatedTaskLoading || isUpdatedTaskLoading || !state.title && !state.description && !state.priority && !state.dueDate}
				>
					{isCreatedTaskLoading || isUpdatedTaskLoading
						? <MaterializeSpinner centered={false} small={true} />
						: 'Submit'
					}
				</button>
				<button
					type="button"
					className="btn waves-effect waves-light w-40"
					disabled={isCreatedTaskLoading || isUpdatedTaskLoading || !state.id}
					onClick={resetForm}
				>
					Reset
				</button>
			</div>
		</form>
	)
}

export default TaskForm
