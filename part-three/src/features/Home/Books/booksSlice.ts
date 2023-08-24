import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

import { RootState } from '../../../reduxStore'
import { resetBooksAndAuthors } from '../../reduxActions'

// define a type for the slice state
export type BookType = {
	title: string
	subtitle: string
	publisher: number
}
// define the initial state
const initialState: Record<string, BookType> = {}

// define the books slice
export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		createBook(state, action: PayloadAction<BookType>) {
			state[nanoid(10)] = action.payload
		},
		removeBook(state, action: PayloadAction<string>) {
			delete state[action.payload]
		},
	},
	extraReducers(builder) {
		builder.addCase(resetBooksAndAuthors, () => ({}))
	},
})

// export some selectors
export type BookWithIdType = BookType & { id: string }
export const selectAllBooks = (state: RootState): BookWithIdType[] => {
	const books = Object.entries(state.books)
	return books.length > 0
		? books.map(([key, value]) => ({ id: key, ...value }))
		: []
}

// export the authors reducer and actions
export const { createBook, removeBook } = booksSlice.actions
export default booksSlice.reducer
