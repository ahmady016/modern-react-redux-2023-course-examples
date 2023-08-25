import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

import { RootState } from '../../../redux/store'
import { resetBooksAndAuthors } from '../../../redux/actions'

// define a type for the slice state
export type AuthorType = {
	name: string
	country: string
	age: number
}
// define the initial state
const initialState: Record<string, AuthorType> = {}

// define the authors slice
export const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		createAuthor(state, action: PayloadAction<AuthorType>) {
			state[nanoid(10)] = action.payload
		},
		removeAuthor(state, action: PayloadAction<string>) {
			delete state[action.payload]
		},
	},
	extraReducers(builder) {
		builder.addCase(resetBooksAndAuthors, () => ({}))
	},
})

// export some selectors
export type AuthorWithIdType = AuthorType & { id: string }
export const selectAllAuthors = (state: RootState): AuthorWithIdType[] => {
	const authors = Object.entries(state.authors)
	return authors.length > 0
		? authors.map(([key, value]) => ({ id: key, ...value }))
		: []
}

// export the authors reducer and actions
export const { createAuthor, removeAuthor } = authorsSlice.actions
export default authorsSlice.reducer
