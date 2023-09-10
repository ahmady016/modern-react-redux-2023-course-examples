import React from 'react'

import { useAppSelector } from '../../redux/store'
import { selectViewMode } from './resumesSlice'

import ResumeForm from './ResumeForm'
import ResumesList from './ResumesList'
import ResumeView from './ResumeView'

const ResumesPage: React.FC = () => {
	const viewMode = useAppSelector(selectViewMode)
	return (
        <div className="w-full p-4">
            <h1 className="text-center text-3xl font-semibold">Candidates Resumes</h1>
            <hr className="h-px my-8 bg-gray-300 border-0" />
			<div className="grid gap-4 grid-cols-2">
				{viewMode === 'form' ? <ResumeForm /> : <ResumeView />}
				<ResumesList />
			</div>
		</div>
	)
}

export default ResumesPage
