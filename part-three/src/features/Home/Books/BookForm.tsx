import React from 'react'

import Button from '../../../components/Button'

const BookForm : React.FC = () => {
	return (
		<form>
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
				/>
			</div>
			<Button primary>Add Book</Button>
		</form>
	)
}

export default BookForm
