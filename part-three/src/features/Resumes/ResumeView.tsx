import React from 'react'

import { useAppSelector } from '../../redux/store'
import { ResumeWithIdType, selectCurrentResume } from './resumesSlice'

const ResumePage: React.FC<ResumeWithIdType> = ({
	id, name, title, bio, email, mobile, address, birthDate, gender, qualifications, skills, experiences
}) => {
	return (
		<section id={id} className="mb-4 p-3 bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
			<section className="mb-3 border-b-4 border-gray-300 pb-4">
				<h1 className="mb-0 text-4xl font-bold text-gray-700">{name}</h1>
				<h2 className="m-0 ml-2 text-2xl font-semibold text-gray-700">{title}</h2>
				<h3 className="m-0 mt-2 ml-2 font-semibold text-md text-gray-500">{bio}</h3>
			</section>
			<section className="mb-3 border-b-4 border-gray-300 pb-4">
				<ul className="list-inside pr-7">
					<li className="mt-1 leading-normal text-black transition duration-100 ease-in text-md hover:text-gray-700 print:">
						<span className="mr-2 text-lg font-semibold text-gray-700">Email:</span>
						<span className="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:">{email}</span>
					</li>
					<li className="mt-1 leading-normal text-black transition duration-100 ease-in text-md hover:text-gray-700 print:">
						<span className="mr-2 text-lg font-semibold text-gray-700">Mobile:</span>
						<span className="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:">{mobile}</span>
					</li>
					<li className="mt-1 leading-normal text-black transition duration-100 ease-in text-md hover:text-gray-700 print:">
						<span className="mr-2 text-lg font-semibold text-gray-700">Address:</span>
						<span className="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:">{address}</span>
					</li>
					<li className="mt-1 leading-normal text-black transition duration-100 ease-in text-md hover:text-gray-700 print:">
						<span className="mr-2 text-lg font-semibold text-gray-700">Birth Date:</span>
						<span className="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:">{birthDate}</span>
					</li>
					<li className="mt-1 leading-normal text-black transition duration-100 ease-in text-md hover:text-gray-700 print:">
						<span className="mr-2 text-lg font-semibold text-gray-700">Gender:</span>
						<span className="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:">{gender}</span>
					</li>
				</ul>
			</section>
			<section className="mb-3 border-b-4 border-gray-300 pb-4">
				<h2 className="mb-2 text-lg font-bold text-gray-700 print:font-normal">QUALIFICATIONS</h2>
				<ul className="flex flex-wrap space-x-2 text-md leading-relaxed -mr-1.6 -mb-1 font-bold">
					{qualifications.map(q => <li className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800" key={q}>{q}</li>)}
				</ul>
			</section>
			<section className="mb-3 border-b-4 border-gray-300 pb-4">
				<h2 className="mb-2 text-lg font-bold text-gray-700 print:font-normal">SKILLS</h2>
				<ul className="flex flex-wrap space-x-2 text-md leading-relaxed -mr-1.6 -mb-1 font-bold">
					{skills.map(skill => <li className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800" key={skill}>{skill}</li>)}
				</ul>
			</section>
			<section>
				<h2 className="mb-2 text-lg font-bold text-gray-700 print:font-normal">EXPERIENCES</h2>
				<ul className="flex flex-wrap space-x-2 text-md leading-relaxed -mr-1.6 -mb-1 font-bold">
					{experiences.map(ex => <li className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800" key={ex}>{ex}</li>)}
				</ul>
			</section>
		</section>
	)
}

const ResumeView: React.FC = () => {
	const resume = useAppSelector(selectCurrentResume)
	return (
		<div className="py-2 px-6 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300">
			{resume !== undefined
				? <ResumePage {...resume} />
				: <p className="text-center p-3">There is no Selected Resume right now</p>
			}
		</div>
	)
}

export default ResumeView
