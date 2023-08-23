import React from 'react'

import Button from '../../../components/Button'

const AuthorForm: React.FC = () => {
	return (
		<form>
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
				/>
			</div>
			<Button primary>Add Author</Button>
		</form>
	)
}

export default AuthorForm
