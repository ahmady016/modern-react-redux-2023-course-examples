import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

// define a type for the slice state
type BookType = {
	title: string
    subtitle: string
    publisher: number
}
// define the initial state
const initialState : Record<string, BookType> = {}

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
        }
    }
})

// export the authors reducer and actions
export const { createBook, removeBook } = booksSlice.actions
export default booksSlice.reducer
