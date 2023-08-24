import React from 'react'

import { useAppDispatch } from '../../reduxStore'
import { resetBooksAndAuthors } from '../reduxActions'

import Button from '../../components/Button'
import Authors from './Authors'
import Books from './Books'

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch()
    const handleReset = React.useCallback(() => void dispatch(resetBooksAndAuthors()), [dispatch])

	return (
        <div className="w-full p-4">
            <div className="w-1/6 m-auto">
                <Button className="w-1/6" danger rounded onClick={handleReset}>Reset All</Button>
            </div>
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <Authors />
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <Books />
        </div>
    )
}

export default HomePage
