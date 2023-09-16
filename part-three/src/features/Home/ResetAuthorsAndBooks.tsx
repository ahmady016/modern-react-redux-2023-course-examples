import React from 'react'
import { FcFullTrash } from 'react-icons/fc'

import { useAppDispatch } from '../../redux/store'
import { resetBooksAndAuthors } from '../../redux/actions'

import Button from '../../components/Button'

const ResetAuthorsAndBooks: React.FC = () => {
    const dispatch = useAppDispatch()
    const handleReset = React.useCallback(() => void dispatch(resetBooksAndAuthors()), [dispatch])

	return (
        <div className="w-40 m-auto">
            <Button className="py-3 hover:bg-red-500 hover:text-white" danger rounded outline onClick={handleReset}>
                <FcFullTrash className="mr-2 text-2xl" />
                <span>Reset All</span>
            </Button>
        </div>
    )
}

export default ResetAuthorsAndBooks
