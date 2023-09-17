import React from 'react'
import { FiEdit, FiX } from 'react-icons/fi'

import { Course, getErrorMessage, useDeleteCourseMutation } from '../RTK_Query'
import { useAppDispatch } from '../../../redux/store'
import { setCourseId } from '../RTK_Query/coursesSlice'

import Spinner from '../../../components/Spinner'
import { Link } from 'react-router-dom'

const CourseItem: React.FC<Course> = ({ id, title, description, imageUrl, createdBy }) => {
	const [deleteCourse, deleteCourseResult] = useDeleteCourseMutation()
	const handleRemove = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		deleteCourse(e.currentTarget.id)
	}, [deleteCourse])

	const dispatch = useAppDispatch()
	const handleEdit = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(setCourseId(e.currentTarget.id))
	}, [dispatch])

	return (
		<li className="py-3 sm:py-4">
			<div className="flex justify-around items-center space-x-4">
				<div className="flex-shrink-0">
					<img className="w-16 h-16 rounded-full" src={imageUrl} alt={title} />
				</div>
				<div className="flex-1">
					<p className="text-lg text-gray-900 hover:text-blue-900 hover:underline dark:text-white"><Link to={`./${id}`}>{title}</Link></p>
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">{description}</p>
				</div>
				<div className="flex-grow flex justify-end items-center font-medium text-base text-gray-900 dark:text-white">
					<p>{createdBy}</p>
				</div>
				<div className="flex justify-between items-center space-x-2">
					<button
						className="h-6 w-6 relative left-3 rounded-full bg-green-300 text-green-700 hover:bg-green-400 hover:text-green-900 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
						id={id}
						type="button"
						onClick={handleEdit}
					>
						<FiEdit className="m-auto" />
					</button>
					<button
						className="h-6 w-6 relative left-3 rounded-full bg-red-300 text-red-700 hover:bg-red-400 hover:text-red-900 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
						id={id}
						type="button"
						onClick={handleRemove}
					>
						{deleteCourseResult.isLoading
							? <Spinner size={4} />
							: <FiX className="m-auto" />
						}
					</button>
				</div>
				{deleteCourseResult.isError && <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(deleteCourseResult.error)}</p>}
			</div>
		</li>
	)
}

export default CourseItem
