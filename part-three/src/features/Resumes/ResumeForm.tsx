import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { TagsInput } from "react-tag-input-component"

import { useAppSelector } from '../../redux/store'
import { ResumeType, createResume, selectCurrentResume, updateResume } from './resumesSlice'

import Button from '../../components/Button'
import useAsyncThunk from './useAsyncThunk'
import Spinner from '../../components/Spinner'

const emptyResume : ResumeType = {
	name: '',
	title: '',
	bio: '',
	email: '',
	mobile: '',
	birthDate: '',
	gender: 'male',
	address: '',
	qualifications: [],
	skills: [],
	experiences: [],
}
const ResumeForm: React.FC = () => {
	const currentResume = useAppSelector(selectCurrentResume)
	const [formState, setFormState] = React.useState<ResumeType>(currentResume || { ...emptyResume })
	React.useEffect(() => {
		setFormState(currentResume || { ...emptyResume })
	}, [currentResume])
	const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setFormState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	}, [])

	const handleQualificationsChange = React.useCallback((items: string[]) => {
		setFormState(prevState => ({ ...prevState, qualifications: items }))
	}, [])
	const handleSkillsChange = React.useCallback((items: string[]) => {
		setFormState(prevState => ({ ...prevState, skills: items }))
	}, [])
	const handleExperiencesChange = React.useCallback((items: string[]) => {
		setFormState(prevState => ({ ...prevState, experiences: items }))
	}, [])

	const [doCreateResume, isCreateResumeLoading, createResumeError] = useAsyncThunk(createResume)
	const [doUpdateResume, isUpdateResumeLoading, updateResumeError] = useAsyncThunk(updateResume)
	const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if(currentResume)
			doUpdateResume({ id: currentResume.id, ...formState })
		else
			doCreateResume({ id: nanoid(10), ...formState })
		setFormState({ ...emptyResume })
	}, [currentResume, formState, doUpdateResume, doCreateResume])

	return (
		<div className="py-2 px-6 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300">
			<h1 className="text-center text-2xl pb-3">Resume Form</h1>
			<form onSubmit={handleSubmit}>
				<div className="relative z-0 w-full mb-6 group">
					<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">Name</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="name"
						name="name"
						value={formState.name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="title">Title</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="title"
						name="title"
						value={formState.title}
						onChange={handleInputChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="bio">Bio</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="bio"
						name="bio"
						value={formState.bio}
						onChange={handleInputChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="email">Email</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="email"
						name="email"
						value={formState.email}
						onChange={handleInputChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="mobile">Mobile</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="mobile"
						name="mobile"
						value={formState.mobile}
						onChange={handleInputChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="birthDate">Birth Date</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="date"
						id="birthDate"
						name="birthDate"
						value={formState.birthDate}
						onChange={handleInputChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="address">Address</label>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						type="text"
						id="address"
						name="address"
						value={formState.address}
						onChange={handleInputChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
					<div className="grid gap-4 grid-cols-4">
						<div className="flex items-center mb-4 cursor-pointer">
							<input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
								type="radio"
								name="gender"
								id="male"
								value="male"
								checked={formState.gender === 'male'}
								onChange={handleInputChange}
							/>
							<label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer" htmlFor="male">Male</label>
						</div>
						<div className="flex items-center mb-4 cursor-pointer">
							<input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
								type="radio"
								name="gender"
								id="female"
								value="female"
								checked={formState.gender === 'female'}
								onChange={handleInputChange}
							/>
							<label className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer" htmlFor="female">Female</label>
						</div>
					</div>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="qualifications">Qualifications</label>
					<TagsInput
						name="qualifications"
						placeHolder="enter qualifications"
						value={formState.qualifications}
						onChange={handleQualificationsChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="skills">Skills</label>
					<TagsInput
						name="skills"
						placeHolder="enter skills"
						value={formState.skills}
						onChange={handleSkillsChange}
					/>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="experiences">Experiences</label>
					<TagsInput
						name="experiences"
						placeHolder="enter experiences"
						value={formState.experiences}
						onChange={handleExperiencesChange}
					/>
				</div>
				<div className="w-1/3">
					<Button
						className="py-3 rounded-md hover:bg-blue-700 hover:border-white hover:font-semibold"
						primary
						disabled={isCreateResumeLoading || isUpdateResumeLoading}
					>
						{(isCreateResumeLoading || isUpdateResumeLoading) && <Spinner size={4} align='left' />}
						{currentResume ? 'Update' : 'Add'} Resume
					</Button>
				</div>
				{createResumeError && <p className="mt-3 p-3 bg-red-200 text-red-800">{createResumeError}</p>}
				{updateResumeError && <p className="mt-3 p-3 bg-red-200 text-red-800">{updateResumeError}</p>}
			</form>
		</div>
	)
}

export default ResumeForm
