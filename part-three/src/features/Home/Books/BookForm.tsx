import React from 'react'

import { useAppDispatch } from '../../../redux/store'
import { BookType, createBook } from './booksSlice'

import Button from '../../../components/Button'

const emptyBook : BookType = {
	title: '',
	subtitle: '',
	publisher: ''
}
const BookForm : React.FC = () => {
	const [formState, setFormState] = React.useState<BookType>({ ...emptyBook })
	const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setFormState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	}, [])

	const dispatch = useAppDispatch()
	const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(createBook(formState))
		setFormState({ ...emptyBook })
	}, [formState, dispatch])

	return (
		<div className="py-2 px-6 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300">
			<h1 className="text-center text-2xl pb-3">Book Form</h1>
			<form onSubmit={handleSubmit}>
				<div className="relative z-0 w-full mb-6 group">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="title"
					>
						Title
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="title"
						name="title"
						value={formState.title}
						onChange={handleInputChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="subtitle"
					>
						Subtitle
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="subtitle"
						name="subtitle"
						value={formState.subtitle}
						onChange={handleInputChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="publisher"
					>
						Publisher
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="publisher"
						name="publisher"
						value={formState.publisher}
						onChange={handleInputChange}
					/>
				</div>
				<div className="w-1/3">
					<Button className="py-3 rounded-md hover:bg-blue-700 hover:border-white hover:font-semibold" primary>Add Book</Button>
				</div>
			</form>
		</div>
	)
}

export default BookForm
