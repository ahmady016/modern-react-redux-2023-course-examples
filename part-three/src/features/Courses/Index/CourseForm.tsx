import React from 'react'
import { nanoid } from 'nanoid'

import { Course } from '../RTK_Query/coursesApi'

import Button from '../../../components/Button'

const emptyCourse : Course = {
    id: nanoid(10),
    title: '',
    description: '',
    imageUrl: '',
    rate: 0,
    students: 0,
    createdBy: '',
    updatedAt: '',
}
const CourseForm: React.FC = () => {
	const [formState, setFormState] = React.useState<Course>({ ...emptyCourse })
	const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	}, [])
	const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setFormState({ ...emptyCourse })
	}, [])

	return (
        <fieldset className="p-5 rounded-md border border-solid border-gray-300 bg-gray-100 hover:bg-gray-200 hover:border-gray-400">
            <legend className="w-fit px-3 text-xl">Create New Course</legend>
            <form onSubmit={handleSubmit}>
				<div className="grid grid-cols-6 gap-4">
                    {/* first row */}
                    <div className="col-span-3">
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
                    <div className="col-span-3">
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
                    <div className="col-span-6">
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
                    <div>
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
                        <Button className="mt-5 py-3 rounded-md hover:bg-blue-700 hover:border-white hover:font-semibold" primary>Add Course</Button>
                    </div>
				</div>
			</form>
		</fieldset>
	)
}

export default CourseForm
