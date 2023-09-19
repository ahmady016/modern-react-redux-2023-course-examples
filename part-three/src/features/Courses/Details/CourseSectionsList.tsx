import React from 'react'

import { Section } from '../RTK_Query'
import CourseSectionItem from './CourseSectionItem'

type CourseSectionsListProps = {
	sections: Section[]
}
const CourseSectionsList: React.FC<CourseSectionsListProps> = ({ sections }) => {
	return (
		<ul className="w-4/6 m-auto">
			{sections.map(section => <CourseSectionItem key={section.id} {...section} />)}
		</ul>
	)
}

export default CourseSectionsList
