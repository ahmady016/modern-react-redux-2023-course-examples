import React from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

import { useAppDispatch } from '../../../redux/store'
import { setSectionId } from '../RTK_Query/coursesSlice'
import { Section, getErrorMessage, useDeleteSectionMutation } from '../RTK_Query'

import Spinner from '../../../components/Spinner'

import ExpandablePanel from '../../../components/ExpandablePanel'
import LessonForm from './LessonForm'
import CourseLessonsList from './CourseLessonsList'

const CourseSectionItem: React.FC<Section> = ({ id, title }) => {
    const [ deleteSection, deleteSectionResult ] = useDeleteSectionMutation()
    const handleRemove = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		deleteSection(e.currentTarget.id)
	}, [deleteSection])

	const dispatch = useAppDispatch()
	const handleEditSection = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(setSectionId(e.currentTarget.id))
	}, [dispatch])

    const header = (
        <>
            <div className="w-16 flex justify-between items-center">
                <button
                    className="h-6 w-6 rounded-full bg-green-300 text-green-700 hover:bg-green-400 hover:text-green-900 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                    id={id}
                    type="button"
                    onClick={handleEditSection}
                >
                    <FiEdit className="m-auto" />
                </button>
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
            </div>
            <p className="text-lg font-semibold text-gray-800 hover:text-gray-600">{title}</p>
            {deleteSectionResult.isError && <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(deleteSectionResult.error)}</p>}
        </>
    )
	return (
        <li>
            <ExpandablePanel header={header}>
                <LessonForm sectionId={id} />
                <CourseLessonsList sectionId={id} />
            </ExpandablePanel>
        </li>
    )
}

export default CourseSectionItem
