/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { nanoid } from 'nanoid'

import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { selectSectionId, setSectionId } from '../RTK_Query/coursesSlice'
import {
	Section,
	getErrorMessage,
	useGetSectionQuery,
	useCreateSectionMutation,
	useUpdateSectionMutation
} from '../RTK_Query'

import Spinner from '../../../components/Spinner'
import Button from '../../../components/Button'

const getNewEmptySection = (courseId: string) => ({ id: nanoid(10), title: '', courseId }) as Section
type SectionFormProps = {
	courseId: string
}
const SectionForm: React.FC<SectionFormProps> = ({ courseId }) => {
    const [formState, setFormState] = React.useState<Section>(getNewEmptySection(courseId))
    const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }, [])

    const sectionId = useAppSelector(selectSectionId)
    const getSectionQuery = useGetSectionQuery(sectionId, { skip: Boolean(!sectionId) })
    React.useEffect(() => {
        if(!sectionId)
            setFormState(getNewEmptySection(courseId))
        else if(getSectionQuery.data)
            setFormState(getSectionQuery.data)
	}, [sectionId, getSectionQuery])

    const dispatch = useAppDispatch()
    const [createSection, createSectionResult] = useCreateSectionMutation()
    const [updateSection, updateSectionResult] = useUpdateSectionMutation()
	const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
        if(getSectionQuery.data) {
            updateSection(formState)
            dispatch(setSectionId(''))
        } else {
            createSection(formState)
            setFormState(getNewEmptySection(courseId))
        }
	}, [formState, createSection, updateSection])

	return (
        <fieldset className="w-4/6 mb-4 mx-auto p-5 rounded-md border border-solid border-gray-300 bg-gray-100 hover:bg-gray-200 hover:border-gray-400">
            <legend className="w-fit px-3 text-xl">{sectionId ? "Update Existing Section" : "Create New Section"}</legend>
            {getSectionQuery.isFetching && <Spinner size={10} align="center" />}
            {getSectionQuery.isError && <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(getSectionQuery.error)}</p>}
            <form onSubmit={handleSubmit}>
				<div className="grid gap-3 grid-cols-12">
					<div className="col-span-10">
						<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="title">Title</label>
						<input
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							type="text"
							id="title"
							name="title"
							value={formState.title}
							onChange={handleInputChange}
						/>
					</div>
					<div className="col-span-2 mt-2">
						<Button
							className="mt-4 py-3 rounded-md hover:bg-blue-700 hover:border-white hover:font-semibold"
							primary
							disabled={createSectionResult.isLoading || updateSectionResult.isLoading}
						>
							{createSectionResult.isLoading || updateSectionResult.isLoading
								? <Spinner size={4} align='left' />
								: (sectionId)
									? "Update Section"
									: "Add Section"
							}
						</Button>
					</div>
				</div>
			</form>
		</fieldset>
	)
}

export default SectionForm
