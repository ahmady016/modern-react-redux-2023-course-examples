
export enum TaskPriorities {
	Low = 'low',
	Normal = 'normal',
	High = 'high',
	RealTime = 'real-time',
}
export const taskPriorities = Object.values(TaskPriorities)

export interface Task {
	id: string
	title: string
	description: string
	priority: TaskPriorities | string
	createdAt: string
	dueDate: string
	completedAt: string
}
export const defaultTask : Task = {
	id: '',
	title: '',
	description: '',
	priority: '',
	createdAt: '',
	dueDate: '',
	completedAt: ''
}

export type TaskFormProps = {
    task: Task
    createTask: (newTask: Task) => void
    updateTask: (updatedTask: Task) => void
}
export type TaskListProps = {
    tasks: Task[]
    removeTask: (removedTask: Task) => void,
	setSelectedTask: React.Dispatch<React.SetStateAction<Task>>
}
export type TaskItemProps = {
    task: Task
    removeTask: (removedTask: Task) => void,
	setSelectedTask: React.Dispatch<React.SetStateAction<Task>>
}
