import React from 'react'

import ResetAuthorsAndBooks from './ResetAuthorsAndBooks'
import Authors from './Authors'
import Books from './Books'

const HomePage: React.FC = () => {
	return (
        <div className="w-full p-4">
            <ResetAuthorsAndBooks />
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <Authors />
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <Books />
        </div>
    )
}

export default HomePage
