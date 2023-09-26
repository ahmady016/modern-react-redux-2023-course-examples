import React from 'react'

import { getErrorMessage, useGetSectionsQuery } from '../RTK_Query'

import Spinner from '../../../components/Spinner'

import CourseSectionItem from './CourseSectionItem'

type CourseSectionsListProps = {
	courseId: string
}
const CourseSectionsList: React.FC<CourseSectionsListProps> = ({ courseId }) => {
	const { isFetching, isError, error, data: sections } = useGetSectionsQuery(courseId, { skip: Boolean(!courseId) })

	if(isFetching)
		return <div className="mt-12"><Spinner align='center' size={12} /></div>

	if(isError)
		return <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(error)}</p>

	if(!isFetching && !isError && sections!.length > 0)
		return (
			<ul className="w-4/6 m-auto">
				{sections!.map(section => <CourseSectionItem key={section.id} {...section} />)}
			</ul>
		)
	return null
}

export default CourseSectionsList
