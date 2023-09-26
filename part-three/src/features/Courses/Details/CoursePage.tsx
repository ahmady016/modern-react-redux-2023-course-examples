/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

import CourseInfoCard from './CourseInfoCard'
import SectionForm from './SectionForm'
import CourseSectionsList from './CourseSectionsList'

const CoursePage: React.FC = () => {
	const { courseId } = useParams()
	return (
		<div>
			<CourseInfoCard courseId={courseId!} />
			<hr className="h-px mb-8 bg-gray-300 border-0" />
			<SectionForm courseId={courseId!} />
			<CourseSectionsList courseId={courseId!} />
		</div>
	)
}

export default CoursePage
