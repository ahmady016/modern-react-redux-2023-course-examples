/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { nanoid } from 'nanoid'

import { useAppSelector, useAppDispatch } from '../../../redux/store'
import { selectCourseId, setCourseId } from '../RTK_Query/coursesSlice'
import {
    Course,
    useGetCourseQuery,
    useCreateCourseMutation,
    useUpdateCourseMutation
} from '../RTK_Query'

import Button from '../../../components/Button'
import Spinner from '../../../components/Spinner'

const emptyCourse : Course = {
    id: nanoid(10),
    title: '',
    description: '',
    imageUrl: '',
    rate: 0,
    students: 0,
    createdBy: '',
    updatedAt: '',
    price: 0
}
const CourseForm: React.FC = () => {
    const [formState, setFormState] = React.useState<Course>({ ...emptyCourse })
    const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }, [])

    const courseId = useAppSelector(selectCourseId)
    const getCourseQuery = useGetCourseQuery(courseId, { skip: Boolean(!courseId) })
    React.useEffect(() => {
        if(!courseId)
            setFormState({ ...emptyCourse })
        else if(getCourseQuery.data)
            setFormState(getCourseQuery.data)
	}, [courseId, getCourseQuery])

    const dispatch = useAppDispatch()
    const [createCourse, createCourseResult] = useCreateCourseMutation()
    const [updateCourse, updateCourseResult] = useUpdateCourseMutation()
	const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
        if(getCourseQuery.data) {
            updateCourse(formState)
            dispatch(setCourseId(''))
        } else {
            createCourse(formState)
            setFormState({ ...emptyCourse })
        }
	}, [formState, createCourse, updateCourse])

	return (
        <fieldset className="p-5 rounded-md border border-solid border-gray-300 bg-gray-100 hover:bg-gray-200 hover:border-gray-400">
            <legend className="w-fit px-3 text-xl">Create New Course</legend>
            {getCourseQuery.isFetching && <Spinner size={10} align="center" />}
            {getCourseQuery.isError && <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{getCourseQuery.error.toString()}</p>}
            <form onSubmit={handleSubmit}>
				<div className="grid grid-cols-8 gap-4">
                    {/* first row */}
                    <div className="col-span-4">
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
                    <div className="col-span-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="imageUrl">Image Url</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={formState.imageUrl}
                            onChange={handleInputChange}
                        />
                    </div>
					{/* second row */}
                    <div className="col-span-8">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="description">Description</label>
                        <textarea
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            id="description"
                            name="description"
                            value={formState.description}
                            onChange={handleInputChange}
                        />
                    </div>
					{/* third row */}
                    <div className="col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="createdBy">Created By</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="createdBy"
                            name="createdBy"
                            value={formState.createdBy}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="updatedAt">Updated At</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="date"
                            id="updatedAt"
                            name="updatedAt"
                            value={formState.updatedAt}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="rate">Rate</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="number"
                            id="rate"
                            name="rate"
                            value={formState.rate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="students">Students</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="number"
                            id="students"
                            name="students"
                            value={formState.students}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="price">Price</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="number"
                            id="price"
                            name="price"
                            value={formState.price}
                            onChange={handleInputChange}
                        />
                    </div>
					<div>
                        <Button
                            className="mt-5 py-3 rounded-md hover:bg-blue-700 hover:border-white hover:font-semibold"
                            primary
                            disabled={createCourseResult.isLoading || updateCourseResult.isLoading}
                        >
                            {createCourseResult.isLoading || updateCourseResult.isLoading
                                ? <Spinner size={4} align='left' />
                                : (getCourseQuery.data)
                                    ? "Update Course"
                                    : "Add Course"
                            }
                        </Button>
                    </div>
                    <div>
                        {createCourseResult.isError && <p className="mt-3 p-3 bg-red-200 text-red-800">{createCourseResult.error.toString()}</p>}
                        {updateCourseResult.isError && <p className="mt-3 p-3 bg-red-200 text-red-800">{updateCourseResult.error.toString()}</p>}
                    </div>
				</div>
			</form>
		</fieldset>
	)
}

export default CourseForm
