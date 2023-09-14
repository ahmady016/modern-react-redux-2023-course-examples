import React from 'react'
import { FiSearch } from 'react-icons/fi'

const CourseSearchBar: React.FC = () => {
    const [inputText, setInputText] = React.useState<string>('')
    const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => void setInputText(e.currentTarget.value), [])
	const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}, [])

    return (
		<form onSubmit={handleSubmit} className="h-12 w-2/3 mx-auto my-0 p-0 flex items-center justify-center border rounded text-black bg-white font-sans">
            <input className="block h-full w-5/6 px-4 border border-gray-200"
                type="text"
                placeholder="search courses here ..."
                value={inputText}
                onChange={handleInputChange}
            />
            <button className="h-full w-1/6 border-l flex justify-center items-center bg-gray-300 text-gray-900 hover:bg-gray-600 hover:text-gray-100">
                <FiSearch className="mr-2" />
                <span>Search</span>
            </button>
		</form>
	)
}

export default CourseSearchBar
