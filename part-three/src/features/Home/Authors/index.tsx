import React from 'react'

import AuthorForm from './AuthorForm'
import AuthorsList from './AuthorsList'

const Authors: React.FC = () => {
	return (
		<section>
			<AuthorForm />
			<AuthorsList />
		</section>
	)
}

export default Authors
