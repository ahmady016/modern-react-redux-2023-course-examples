import React from 'react'
import { FiSearch } from 'react-icons/fi'

const MobileSearchBar: React.FC = () => {
	return (
		<div className="h-12 w-2/3 mx-auto my-0 p-0 flex items-center justify-center border rounded text-black bg-white font-sans">
            <input className="block h-full w-5/6 px-4 border border-gray-200" type="text" placeholder="search mobiles here ..." />
            <button className="h-full w-1/6 border-l flex justify-center items-center bg-gray-300 text-gray-900 hover:bg-gray-600 hover:text-gray-100">
                <FiSearch className="mr-2" />
                <span>Search</span>
            </button>
		</div>
	)
}

export default MobileSearchBar
