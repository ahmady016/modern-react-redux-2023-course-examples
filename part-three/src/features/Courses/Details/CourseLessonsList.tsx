import React from 'react'
import { FiClock, FiVideo } from 'react-icons/fi'

import { getErrorMessage, useGetLessonsQuery } from '../RTK_Query'
import Spinner from '../../../components/Spinner'

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
                    {data.map(lesson => (
                        <li className="py-2" key={lesson.id}>
                            <div className="flex justify-between items-center space-x-4">
                                <FiVideo />
                                <p className="flex-grow text-md font-medium text-gray-900 truncate dark:text-white">{lesson.title}</p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <span>{lesson.length}</span>
                                    <FiClock className="ml-2" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            }
        </section>
    )
}

export default CourseLessonsList
