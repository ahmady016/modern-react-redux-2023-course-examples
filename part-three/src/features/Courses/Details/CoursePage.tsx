import React from 'react'
import { useParams } from 'react-router-dom'

import { Course, Section, getErrorMessage, useGetCourseWithSectionsQuery } from '../RTK_Query'

import Spinner from '../../../components/Spinner'

import CourseInfoCard from './CourseInfoCard'
import SectionForm from './SectionForm'
import LessonForm from './LessonForm'
import CourseSectionsList from './CourseSectionsList'

const CoursePage: React.FC = () => {
	const { courseId } = useParams()
	const getCourseWithSectionsQuery = useGetCourseWithSectionsQuery(courseId!, { skip: !courseId })

	const [course, setCourse] = React.useState<Course | undefined>(undefined)
	const [sections, setSections] = React.useState<Section[]>([])
	React.useEffect(() => {
		if(getCourseWithSectionsQuery.data) {
			const { sections, ...course } = getCourseWithSectionsQuery.data
			setCourse(course)
			setSections(sections)
		}
	}, [getCourseWithSectionsQuery])

	return (
		<div>
			{getCourseWithSectionsQuery.isLoading 	&& <div className="mt-24"><Spinner align='center' size={12} /></div>}
			{getCourseWithSectionsQuery.isError 	&& <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(getCourseWithSectionsQuery.error)}</p>}
			{(!getCourseWithSectionsQuery.isFetching && !getCourseWithSectionsQuery.isError && getCourseWithSectionsQuery.data) &&
				<>
					<CourseInfoCard {...course!} />
					<hr className="h-px mb-8 bg-gray-300 border-0" />
					<div className="grid gap-3 grid-cols-2">
						<SectionForm />
						<LessonForm />
					</div>
					<hr className="h-px my-8 bg-gray-300 border-0" />
					<CourseSectionsList sections={sections} />
				</>
			}
		</div>
	)
}

export default CoursePage
