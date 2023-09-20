import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../redux/store"

// define a type for the slice state
export type CourseState = {
    searchQuery: string
    courseId: string
    sectionId: string
    lessonId: string
}
// define the initial state
const initialState : CourseState = {
    searchQuery: '',
    courseId: '',
    sectionId: '',
    lessonId: '',
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
		},
		setSectionId(state, action: PayloadAction<string>) {
			state.sectionId = action.payload
		},
		setLessonId(state, action: PayloadAction<string>) {
			state.lessonId = action.payload
		}
    }
})

// export the courses reducer and actions
export const { setSearchQuery, setCourseId, setSectionId, setLessonId } = coursesSlice.actions
export default coursesSlice.reducer

// export some selectors
export const selectSearchQuery = (state: RootState): string => state.courses.searchQuery
export const selectCourseId = (state: RootState): string => state.courses.courseId
export const selectSectionId = (state: RootState): string => state.courses.sectionId
export const selectLessonId = (state: RootState): string => state.courses.lessonId
