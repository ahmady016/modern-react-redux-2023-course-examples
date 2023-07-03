/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { queryClient } from '../main'
import { Task } from './types'

const tasksApi = axios.create({ baseURL: 'http://localhost:3000' })

async function getTasks() {
	const { data } = await tasksApi.get<Task[]>(`/tasks`)
	return data
}
export function useGetTasks() {
	return useQuery<Task[], Error>({ queryKey: ['tasks'], queryFn: getTasks })
}

async function getTask(taskId: string) {
	const { data } = await tasksApi.get<Task>(`/tasks/${taskId}`)
	return data
}
export function useGetTask(taskId = '') {
	return useQuery<Task, Error>({ queryKey: ['tasks', taskId], queryFn: () => getTask(taskId) })
}

const onMutationSuccess = () => void queryClient.invalidateQueries({ queryKey: ['tasks'] })

const createTask = async (newTask: Task) => {
	const { data } = await tasksApi.post<Task>('/tasks', newTask)
	return data
}
export function useCreateTask() {
	const { mutateAsync, isLoading } = useMutation<Task, Error, Task>({
        mutationFn: createTask,
		onSuccess: onMutationSuccess,
	})
    return {
        createTaskAsync: mutateAsync,
        isCreatedTaskLoading: isLoading
    }
}

const updateTask = async (updatedTask: Task) => {
	const { data } = await tasksApi.put<Task>(`/tasks/${updatedTask.id}`, updatedTask)
	return data
}
export function useUpdateTask() {
	const { mutateAsync, isLoading } = useMutation<Task, Error, Task>({
        mutationFn: updateTask,
		onSuccess: onMutationSuccess,
	})
    return {
        updateTaskAsync: mutateAsync,
        isUpdatedTaskLoading: isLoading
    }
}

const deleteTask = async (taskId: string) => {
	const { data } = await tasksApi.delete<any>(`/tasks/${taskId}`)
	return data
}
export function useDeleteTask() {
	const { mutateAsync, isLoading } = useMutation<any, Error, string>({
        mutationFn: deleteTask,
		onSuccess: onMutationSuccess,
	})
    return {
        deleteTaskAsync: mutateAsync,
        isDeletedTaskLoading: isLoading
    }
}
