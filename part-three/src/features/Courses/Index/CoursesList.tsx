/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'

import { useAppSelector, useAppDispatch } from '../../../redux/store'
import { Course, getErrorMessage, useGetCoursesQuery, useSearchCoursesQuery } from '../RTK_Query'
import { selectSearchQuery, setCourseId } from '../RTK_Query/coursesSlice'

import Spinner from '../../../components/Spinner'
import Button from '../../../components/Button'
import CourseItem from './CourseItem'

const CoursesList: React.FC = () => {
	const searchQuery = useAppSelector(selectSearchQuery)
	const searchCoursesQuery = useSearchCoursesQuery(searchQuery, { skip: Boolean(!searchQuery) })
	const allCoursesQuery = useGetCoursesQuery(undefined ,{ skip: Boolean(searchQuery) })

	React.useEffect(() => {
		searchQuery
			? searchCoursesQuery.refetch()
			: allCoursesQuery.refetch()
	}, [searchQuery])
	const courses = allCoursesQuery.data || searchCoursesQuery.data || ([] as Course[])

	const dispatch = useAppDispatch()
    const handleNewCourseMode = React.useCallback(() => void dispatch(setCourseId('')), [dispatch])
	return (
		<div className="w-full p-4 bg-gray-100 rounded-lg shadow sm:p-8 border border-gray-20 hover:bg-gray-200 hover:border-gray-400 dark:bg-gray-800 dark:border-gray-700">
			<div className="mb-4 flex justify-between items-center">
				<h4 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
					<span>{searchQuery && searchCoursesQuery.data ? 'Founded' : 'Top'} Courses </span>
					<span>({courses.length})</span>
				</h4>
				<div className="w-40">
					<Button className="py-3 hover:bg-green-700 hover:text-white" success rounded outline onClick={handleNewCourseMode}>
						<FiPlusCircle className="mr-2 text-2xl" />
						<span>New Course</span>
					</Button>
				</div>
			</div>
			<div>
				{(allCoursesQuery.isFetching || searchCoursesQuery.isFetching)
					&& <div className="mt-4"><Spinner align='center' size={12} /></div>}
				{allCoursesQuery.isError 	&& <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(allCoursesQuery.error)}</p>}
				{searchCoursesQuery.isError && <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(searchCoursesQuery.error)}</p>}
				{courses.length > 0
					?	<ul role="list" className="divide-y divide-gray-200 hover:divide-gray-400 dark:divide-gray-700">
							{courses.map(course => <CourseItem key={course.id} {...course} />)}
						</ul>
					:	<p className="text-center p-3">There is no Courses right now</p>
				}
			</div>
		</div>
	)
}

export default CoursesList
