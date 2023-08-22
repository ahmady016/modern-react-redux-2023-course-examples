import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

// define a type for the slice state
type AuthorType = {
	name: string
    country: string
    age: number
}
// define the initial state
const initialState : Record<string, AuthorType> = {}

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
        }
    }
})

// export the authors reducer and actions
export const { createAuthor, removeAuthor } = authorsSlice.actions
export default authorsSlice.reducer
