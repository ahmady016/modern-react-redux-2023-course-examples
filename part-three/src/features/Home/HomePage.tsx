import React from 'react'

import Authors from './Authors'
import Books from './Books'
import Button from '../../components/Button'

const HomePage: React.FC = () => {
	return (
        <div className="w-full p-4">
            <div className="flex justify-center items-center">
                <Button className="w-1/6" danger rounded>Reset All</Button>
            </div>
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <Authors />
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <Books />
        </div>
    )
}

export default HomePage
