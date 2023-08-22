import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

import { resetBooksAndAuthors } from '../reduxActions'

// define a type for the slice state
type BookType = {
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

// export the authors reducer and actions
export const { createBook, removeBook } = booksSlice.actions
export default booksSlice.reducer
