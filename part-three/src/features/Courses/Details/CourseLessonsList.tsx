import React from 'react'

import { getErrorMessage, useGetLessonsQuery } from '../RTK_Query'

import Spinner from '../../../components/Spinner'

import CourseLessonItem from './CourseLessonItem'

type CourseLessonsListProps = {
    sectionId: string
}
const CourseLessonsList: React.FC<CourseLessonsListProps> = ({ sectionId }) => {
    const { isLoading, isError, error, data: lessons } = useGetLessonsQuery(sectionId, { skip: Boolean(!sectionId) })

    if(isLoading)
        return <Spinner align='center' size={10} />
    if(isError)
        return <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(error)}</p>
    if(lessons && lessons.length > 0)
        return (
            <ul className="mx-6 mb-2 p-4 bg-gray-50 divide-y divide-gray-300 dark:divide-gray-900">
                {lessons!.map(lesson => <CourseLessonItem key={lesson.id} {...lesson} />)}
            </ul>
        )
    else
        return <p>There is No Lessons right now in this Section ...</p>
}

export default CourseLessonsList
