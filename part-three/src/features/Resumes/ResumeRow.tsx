import React from 'react'
import { FiEdit, FiMoreHorizontal, FiX } from 'react-icons/fi'

import { useAppDispatch } from '../../redux/store'
import { ResumeWithIdType, removeResume, setDetailsMode, setFormMode, setSelectedId } from './resumesSlice'
import useAsyncThunk from './useAsyncThunk'

import Spinner from '../../components/Spinner'

const ResumeRow: React.FC<ResumeWithIdType> = ({ id, name, title, email }) => {
	const [doRemoveResume, isLoading, error] = useAsyncThunk(removeResume)
	const handleRemove = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		doRemoveResume(e.currentTarget.id)
	}, [doRemoveResume])

	const dispatch = useAppDispatch()
	const handleDetailsMode = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(setSelectedId(e.currentTarget.id))
		dispatch(setDetailsMode())
	}, [dispatch])
	const handleEditFormMode = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(setSelectedId(e.currentTarget.id))
		dispatch(setFormMode())
	}, [dispatch])

	return (
		<li className="py-3 sm:py-4">
			<div className="flex justify-between items-center space-x-4">
				{isLoading && <div className="w-full"><Spinner align='center' size={8} /></div>}
				{error && <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{error}</p>}
				{!isLoading && !error &&
					<>
						<div className="flex justify-center items-center space-x-4">
							<div>
								<img className="w-12 h-12 rounded-full" src={`https://picsum.photos/seed/${id}/200`} alt={name} />
							</div>
							<div>
								<p className="text-sm text-gray-900 truncate dark:text-white font-medium">{name}</p>
								<p className="text-sm text-gray-500 truncate dark:text-gray-400">{title}</p>
							</div>
						</div>
						<div className="flex justify-around items-center space-x-4 text-base text-gray-900 dark:text-white font-medium">
							<p>{email}</p>
						</div>
						<div className="flex justify-between items-center space-x-2">
							<button
								className="h-6 w-6 relative left-3 rounded-full bg-blue-300 text-blue-700 hover:bg-blue-400 hover:text-blue-900 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
								id={id}
								type="button"
								onClick={handleDetailsMode}
							>
								<FiMoreHorizontal className="m-auto" />
							</button>
							<button
								className="h-6 w-6 relative left-3 rounded-full bg-green-300 text-green-700 hover:bg-green-400 hover:text-green-900 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
								id={id}
								type="button"
								onClick={handleEditFormMode}
							>
								<FiEdit className="m-auto" />
							</button>
							<button
								className="h-6 w-6 relative left-3 rounded-full bg-red-300 text-red-700 hover:bg-red-400 hover:text-red-900 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
								id={id}
								type="button"
								onClick={handleRemove}
							>
								<FiX className="m-auto" />
							</button>
						</div>
					</>
				}
			</div>
		</li>
	)
}

export default ResumeRow
