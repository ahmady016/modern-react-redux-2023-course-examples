/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { nanoid } from 'nanoid'

import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { selectLessonId, setLessonId } from '../RTK_Query/coursesSlice'
import {
	Lesson,
	getErrorMessage,
	useGetLessonQuery,
	useCreateLessonMutation,
	useUpdateLessonMutation
} from '../RTK_Query'

import Button from '../../../components/Button'
import Spinner from '../../../components/Spinner'

const getNewEmptyLesson = (sectionId: string) => ({ id: nanoid(10), title: '',  length: '', sectionId }) as Lesson
type LessonFormProps = {
	sectionId: string
}
const LessonForm: React.FC<LessonFormProps> = ({ sectionId }) => {
	const [formState, setFormState] = React.useState<Lesson>(getNewEmptyLesson(sectionId))
    const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }, [])

    const lessonId = useAppSelector(selectLessonId)
    const getLessonQuery = useGetLessonQuery(lessonId, { skip: Boolean(!lessonId) })
    React.useEffect(() => {
        if(!lessonId)
            setFormState(getNewEmptyLesson(sectionId))
        else if(getLessonQuery.data)
            setFormState(getLessonQuery.data)
	}, [lessonId, getLessonQuery])

    const dispatch = useAppDispatch()
    const [createLesson, createLessonResult] = useCreateLessonMutation()
    const [updateLesson, updateLessonResult] = useUpdateLessonMutation()
	const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
        if(getLessonQuery.data) {
            updateLesson(formState)
            dispatch(setLessonId(''))
        } else {
            createLesson(formState)
            setFormState(getNewEmptyLesson(sectionId))
        }
	}, [formState, createLesson, updateLesson])

	return (
        <fieldset className="mt-2 mb-3 mx-6 p-5 rounded-md border border-solid border-gray-300 bg-gray-100 hover:bg-gray-200 hover:border-gray-400">
            <legend className="w-fit px-3 text-xl">{lessonId ? "Update Existing Lesson" : "Create New Lesson"}</legend>
            {getLessonQuery.isFetching && <Spinner size={10} align="center" />}
            {getLessonQuery.isError && <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getErrorMessage(getLessonQuery.error)}</p>}
            <form onSubmit={handleSubmit}>
				<div className="grid gap-2 grid-cols-10">
					<div className="col-span-8">
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
					<div className="col-span-2">
						<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="length">Length</label>
						<input
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							type="text"
							id="length"
							name="length"
							value={formState.length}
							onChange={handleInputChange}
						/>
					</div>
					<div className="col-span-10">
						<Button
							className="mt-2 py-3 rounded-md hover:bg-blue-700 hover:border-white hover:font-semibold"
							primary
							disabled={createLessonResult.isLoading || updateLessonResult.isLoading}
						>
							{createLessonResult.isLoading || updateLessonResult.isLoading
								? <Spinner size={4} align='left' />
								: (lessonId)
									? "Update Lesson"
									: "Add Lesson"
							}
						</Button>
					</div>
				</div>
			</form>
		</fieldset>
	)
}

export default LessonForm
