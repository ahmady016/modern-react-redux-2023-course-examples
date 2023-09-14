import React from 'react'
import SectionForm from './SectionForm'
import LessonForm from './LessonForm'
import CourseDetailsView from './CourseDetailsView'

const CoursePage: React.FC = () => {
	return (
		<div>
			<h2 className="text-center text-3xl font-bold">Course Details</h2>
			<hr className="h-px my-8 bg-gray-300 border-0" />
			<SectionForm />
			<hr className="h-px my-8 bg-gray-300 border-0" />
			<LessonForm />
			<hr className="h-px my-8 bg-gray-300 border-0" />
			<CourseDetailsView />
		</div>
	)
}

export default CoursePage
