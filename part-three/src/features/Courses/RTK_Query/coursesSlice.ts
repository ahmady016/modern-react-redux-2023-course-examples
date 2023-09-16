import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../redux/store"

// define a type for the slice state
export type CourseState = {
    searchQuery: string
    courseId: string
}
// define the initial state
const initialState : CourseState = {
    searchQuery: '',
    courseId: ''
}
// define the courses slice
export const coursesSlice = createSlice({
	name: 'mobiles',
	initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload
        },
		setCourseId(state, action: PayloadAction<string>) {
			state.courseId = action.payload
		}
    }
})

// export the courses reducer and actions
export const { setSearchQuery, setCourseId } = coursesSlice.actions
export default coursesSlice.reducer

// export some selectors
export const selectSearchQuery = (state: RootState): string => state.courses.searchQuery
export const selectCourseId = (state: RootState): string => state.courses.courseId
