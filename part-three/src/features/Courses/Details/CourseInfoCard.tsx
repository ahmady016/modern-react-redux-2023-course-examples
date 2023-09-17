import React from 'react'
import { useParams } from 'react-router-dom'

import { getErrorMessage, useGetCourseQuery } from '../RTK_Query'

import Spinner from '../../../components/Spinner'

const CourseInfoCard: React.FC = () => {
	const { courseId } = useParams()
	const getCourseQuery = useGetCourseQuery(courseId!, { skip: !courseId })
	return (
		<section className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-900">
			{getCourseQuery.isLoading && <div className="mt-4"><Spinner align='center' size={12} /></div>}
			{getCourseQuery.isError 	&& <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(getCourseQuery.error)}</p>}
			{!getCourseQuery.isFetching && !getCourseQuery.isError && getCourseQuery.data &&
				<div className="py-10 px-4 mx-auto max-w-screen-xl">
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">{getCourseQuery.data.title}</h1>
					<p className="mb-4 text-lg text-justify font-normal text-gray-500 dark:text-gray-400">{getCourseQuery.data.description}</p>
					<div className="flex justify-start items-center space-x-4">
						<div className="flex items-center">
							<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
							<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
							<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
							<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
							<svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
							<p className="ml-2 text-lg font-semibold text-gray-500 dark:text-gray-400">{getCourseQuery.data.rate} rating</p>
						</div>
						<p className="text-lg font-semibold">{getCourseQuery.data.students} students</p>
					</div>
					<div className="mt-2 flex justify-start items-center space-x-4 font-semibold">
						<p>
							<span className="text-gray-500 font-normal">Created By: </span>
							<span className="text-lg">{getCourseQuery.data.createdBy}</span>
						</p>
						<p>
							<span className="text-gray-500 font-normal">Last Updated At: </span>
							<span className="text-lg">{getCourseQuery.data.updatedAt}</span>
						</p>
					</div>
				</div>
			}
		</section>
	)
}

export default CourseInfoCard
