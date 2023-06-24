import React from 'react'

import Card from './Card'

const ProfileCardPage: React.FC = () => {
	return (
		<>
			<h4>Profile Cards</h4>
			<div className="row">
				<Card
					className="col s12 m4"
					title="The First Card Title"
					description="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
					image="https://picsum.photos/seed/7337/200"
				/>
				<Card
					className="col s12 m4"
					title="The Second Card Title"
					description="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
					image="https://picsum.photos/seed/7447/200"
				/>
				<Card
					className="col s12 m4"
					title="The Third Card Title"
					description="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
					image="https://picsum.photos/seed/7997/200"
				/>
			</div>
		</>
	)
}

export default ProfileCardPage
