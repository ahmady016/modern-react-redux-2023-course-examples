import React from 'react'

import BookForm from './BookForm'
import BooksList from './BooksList'

const BooksSection: React.FC = () => {
	return (
		<section className="grid lg:grid-cols-2 lg:gap-6">
			<BookForm />
			<BooksList />
		</section>
	)
}

export default BooksSection
