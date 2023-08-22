import React from 'react'

import BookForm from './BookForm'
import BooksList from './BooksList'

const Books: React.FC = () => {
	return (
		<section>
			<BookForm />
			<BooksList />
		</section>
	)
}

export default Books
