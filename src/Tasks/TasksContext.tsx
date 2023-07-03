/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { Task, defaultTask } from './types'

type TasksContextValue = {
    selectedTask: Task,
    setSelectedTask: React.Dispatch<React.SetStateAction<Task>>
}
const TasksContextDefaultValue = {
    selectedTask: defaultTask,
    setSelectedTask: () => defaultTask
}
const TasksContext = React.createContext<TasksContextValue>(TasksContextDefaultValue)
export function useTasksContext() {
    return React.useContext(TasksContext)
}

type TasksContextProviderProps = {
    children: React.ReactNode
}
const TasksContextProvider : React.FC<TasksContextProviderProps> = ({ children }) => {
	const [selectedTask, setSelectedTask] = React.useState<Task>(defaultTask)
    return (
        <TasksContext.Provider value={{ selectedTask, setSelectedTask }}>
            {children}
        </TasksContext.Provider>
    )
}
export default TasksContextProvider
