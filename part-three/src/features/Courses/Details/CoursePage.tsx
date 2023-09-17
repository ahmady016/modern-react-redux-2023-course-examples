import React from 'react'

import CourseInfoCard from './CourseInfoCard'
import SectionForm from './SectionForm'
import LessonForm from './LessonForm'
import CourseDetailsView from './CourseDetailsView'

const CoursePage: React.FC = () => {
	return (
		<div>
			<CourseInfoCard />
			<hr className="h-px mb-8 bg-gray-300 border-0" />
			<div className="grid gap-3 grid-cols-2">
				<SectionForm />
				<LessonForm />
			</div>
			<hr className="h-px my-8 bg-gray-300 border-0" />
			<CourseDetailsView />
		</div>
	)
}

export default CoursePage
