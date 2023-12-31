
export enum TaskPriorities {
	Low = 'low',
	Normal = 'normal',
	High = 'high',
	RealTime = 'real-time',
}
export const taskPriorities = Object.values(TaskPriorities)
export const taskColors : Record<string, string> = {
	'low': 'yellow accent-2',
	'normal': 'green lighten-2',
	'high': 'blue lighten-2',
	'real-time': 'red lighten-2'
}
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

export type TaskItemProps = {
    task: Task
}
