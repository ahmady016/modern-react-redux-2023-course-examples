/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'

import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchResumes, selectResumes, setFormMode, setSelectedId } from './resumesSlice'
import useAsyncThunk from './useAsyncThunk'

import Button from '../../components/Button'
import ResumeRow from './ResumeRow'
import Spinner from '../../components/Spinner'

const ResumesList: React.FC = () => {
	const resumes = useAppSelector(selectResumes)
	const [doFetchResumes, isLoading, error] = useAsyncThunk(fetchResumes)
	React.useEffect(() => {
		doFetchResumes()
	}, [doFetchResumes])

	const dispatch = useAppDispatch()
	const handleEmptyFormMode = React.useCallback(() => {
		dispatch(setFormMode())
		dispatch(setSelectedId(''))
	}, [dispatch])

	return (
		<div className="w-full p-4 bg-gray-100 rounded-lg shadow border border-gray-20 hover:bg-gray-200 hover:border-gray-400 dark:bg-gray-800 dark:border-gray-700">
			<div className="grid grid-cols-6 gap-4">
				<h5 className="col-span-4 text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Resumes</h5>
				<Button className="col-span-2 py-2 px-3 rounded-lg"
					primary
					onClick={handleEmptyFormMode}
				>
					<FiPlusCircle className="mr-2" />
					New Resume
				</Button>
			</div>
			{isLoading && <div className="mt-4"><Spinner align='center' size={12} /></div>}
			{error && <p className="mt-3 p-3 rounded-md text-center bg-red-400 text-red-900">{error}</p>}
			{!isLoading && !error &&
				<div className="flow-root">
					{resumes.length > 0
						? 	<ul role="list" className="divide-y divide-gray-200 hover:divide-gray-400 dark:divide-gray-700">
								{resumes.map(resume => <ResumeRow key={resume.id} {...resume} />)}
							</ul>
						:	<p className="text-center p-3">There is no Resumes right now</p>
					}
				</div>
			}
		</div>
	)
}

export default ResumesList
