import React from 'react'

import { getErrorMessage, useGetLessonsQuery } from '../RTK_Query'

import Spinner from '../../../components/Spinner'
import CourseLessonItem from './CourseLessonItem'

type CourseLessonsListProps = {
    sectionId: string
}
const CourseLessonsList: React.FC<CourseLessonsListProps> = ({ sectionId }) => {
    const { isFetching, isError, error, data } = useGetLessonsQuery(sectionId)
	return (
        <section>
			{isFetching && <Spinner align='center' size={10} />}
			{isError && <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(error)}</p>}
            {!isFetching && !isError && data &&
                <ul className="mx-6 mb-2 p-4 bg-gray-50 divide-y divide-gray-300 dark:divide-gray-900">
                    {data.map(lesson => <CourseLessonItem key={lesson.id} {...lesson} />)}
                </ul>
            }
        </section>
    )
}

export default CourseLessonsList
