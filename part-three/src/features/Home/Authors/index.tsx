import React from 'react'

import AuthorForm from './AuthorForm'
import AuthorsList from './AuthorsList'

const AuthorsSection: React.FC = () => {
	return (
		<section className="grid lg:grid-cols-2 lg:gap-6">
			<AuthorForm />
			<AuthorsList />
		</section>
	)
}

export default AuthorsSection
