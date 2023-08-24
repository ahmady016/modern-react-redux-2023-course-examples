import React from 'react'

import { useAppDispatch } from '../../../reduxStore'
import { AuthorType, createAuthor } from './authorsSlice'

import Button from '../../../components/Button'

const emptyAuthor : AuthorType = {
	name: '',
	country: '',
	age: 0
}
const AuthorForm: React.FC = () => {
	const [formState, setFormState] = React.useState<AuthorType>({ ...emptyAuthor })
	const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setFormState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	}, [])

	const dispatch = useAppDispatch()
	const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(createAuthor(formState))
		setFormState({ ...emptyAuthor })
	}, [formState, dispatch])

	return (
		<div>
			<h1 className="text-center text-2xl pb-3">Author Form</h1>
			<form onSubmit={handleSubmit}>
				<div className="relative z-0 w-full mb-6 group">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="name"
					>
						Full Name
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="name"
						name="name"
						value={formState.name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="country"
					>
						Country
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="country"
						name="country"
						value={formState.country}
						onChange={handleInputChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label
						className="block mb-2 text-sm font-medium text-gray-900"
						htmlFor="age"
					>
						Age
					</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="number"
						id="age"
						name="age"
						value={formState.age || ''}
						onChange={handleInputChange}
					/>
				</div>
				<Button primary>Add Author</Button>
			</form>
		</div>
	)
}

export default AuthorForm
