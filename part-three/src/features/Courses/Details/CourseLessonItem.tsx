import React from 'react'
import { FiVideo, FiClock, FiEdit, FiTrash2 } from 'react-icons/fi'

import { useAppDispatch } from '../../../redux/store'
import { setLessonId } from '../RTK_Query/coursesSlice'
import { Lesson, useDeleteLessonMutation } from '../RTK_Query'

import Spinner from '../../../components/Spinner'

const CourseLessonItem: React.FC<Lesson> = ({ id, title, length }) => {
	const dispatch = useAppDispatch()
	const handleEditLesson = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(setLessonId(e.currentTarget.id))
	}, [dispatch])

    const [deleteLesson, deleteLessonResult] = useDeleteLessonMutation()
    const handleRemoveLesson = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		deleteLesson(e.currentTarget.id)
	}, [deleteLesson])

	return (
        <li className="py-2">
            <div className="flex justify-between items-center space-x-4">
                <FiVideo />
                <p className="flex-grow text-md font-medium text-gray-900 truncate dark:text-white">{title}</p>
                <div className="w-20 flex justify-start items-center text-base font-semibold text-gray-900 dark:text-white">
                    <FiClock className="mr-1 mt-1" />
                    <span>{length}</span>
                </div>
                <div className="w-14 flex justify-between items-center">
                    <button
                        className="h-6 w-6 rounded-full bg-green-300 text-green-700 hover:bg-green-400 hover:text-green-900 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                        id={id}
                        type="button"
                        onClick={handleEditLesson}
                    >
                        <FiEdit className="m-auto" />
                    </button>
                    <button
                        className="h-6 w-6 rounded-full bg-red-300 text-red-700 hover:bg-red-400 hover:text-red-900 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                        id={id}
                        type="button"
                        onClick={handleRemoveLesson}
                    >
                        {deleteLessonResult.isLoading
                            ? <Spinner size={4} />
                            : <FiTrash2 className="m-auto" />
                        }
                    </button>
                </div>
            </div>
        </li>
    )
}

export default CourseLessonItem
