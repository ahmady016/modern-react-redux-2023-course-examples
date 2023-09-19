import React from 'react'
import { FiTrash2 } from 'react-icons/fi'

import { Section, getErrorMessage, useDeleteSectionMutation } from '../RTK_Query'

import ExpandablePanel from '../../../components/ExpandablePanel'
import Spinner from '../../../components/Spinner'

import CourseLessonsList from './CourseLessonsList'

const CourseSectionItem: React.FC<Section> = ({ id, title }) => {
    const [ deleteSection, deleteSectionResult ] = useDeleteSectionMutation()
    const handleRemove = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		deleteSection(e.currentTarget.id)
	}, [deleteSection])

    const header = (
        <>
            <button
                className="h-6 w-6 mr-3 rounded-full bg-red-300 text-red-700 hover:bg-red-400 hover:text-red-900 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                id={id}
                type="button"
                onClick={handleRemove}
            >
                {deleteSectionResult.isLoading
                    ? <Spinner size={4} />
                    : <FiTrash2 className="m-auto" />
                }
            </button>
            <p className="text-lg font-semibold text-gray-800 hover:text-gray-600">{title}</p>
            {deleteSectionResult.isError && <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(deleteSectionResult.error)}</p>}
        </>
    )
	return (
        <li>
            <ExpandablePanel header={header}>
                <CourseLessonsList sectionId={id} />
            </ExpandablePanel>
        </li>
    )
}

export default CourseSectionItem
