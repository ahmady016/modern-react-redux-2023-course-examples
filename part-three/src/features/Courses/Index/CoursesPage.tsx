import React from 'react'
import CourseForm from './CourseForm'
import CourseSearchBar from './CourseSearchBar'
import CoursesList from './CoursesList'

const CoursesPage: React.FC = () => {
	return (
		<div className="w-full p-3">
			<CourseForm />
			<hr className="h-px my-8 bg-gray-300 border-0" />
			<CourseSearchBar />
			<hr className="h-px my-8 bg-gray-300 border-0" />
			<CoursesList />
		</div>
	)
}

export default CoursesPage
