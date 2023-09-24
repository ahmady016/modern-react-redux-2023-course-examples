/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { RootState } from "../../../redux/store"

import { toDuration } from "../timeUtils"

//#region define a type for the slice state:
export type SectionStats = {
    totalLessons: number
    totalSeconds: number
    totalDuration?: string
}
export type CourseStats = {
    totalSections: number
    totalLessons: number
    totalSeconds: number
    totalDuration?: string
    sectionsStats: Record<string, SectionStats>
}
export type CourseState = {
    searchQuery: string
    courseId: string
    sectionId: string
    lessonId: string
    coursesStats: Record<string, CourseStats>
}
//#endregion

//#region define the initial state:
const initialState : CourseState = {
    searchQuery: '',
    courseId: '',
    sectionId: '',
    lessonId: '',
    coursesStats: {}
}
export type CourseStatsPayload = Omit<CourseStats, 'sectionsStats'> & {
    courseId: string
}
export type SectionStatsPayload = SectionStats & {
    courseId: string
    sectionId: string
}
//#endregion

//#region define the courses slice:
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
		},
        setCourseStats(state, action: PayloadAction<SectionStatsPayload>) {
            const { courseId, sectionId, ...sectionStats } = action.payload
            if(!state.coursesStats[courseId]) {
                state.coursesStats[courseId] = {
                    totalSections: 1,
                    totalLessons: sectionStats.totalLessons,
                    totalSeconds: sectionStats.totalSeconds,
                    sectionsStats: {
                        [sectionId]: sectionStats
                    }
                }
            } else {
                state.coursesStats[courseId].sectionsStats[sectionId] = sectionStats
                state.coursesStats[courseId].totalSections = Object.keys(state.coursesStats[courseId].sectionsStats).length
                state.coursesStats[courseId].totalLessons = Object.values(state.coursesStats[courseId].sectionsStats).reduce((lessons, section) => lessons + section.totalLessons, 0)
                state.coursesStats[courseId].totalSeconds = Object.values(state.coursesStats[courseId].sectionsStats).reduce((seconds, section) => seconds + section.totalSeconds, 0)
            }
            state.coursesStats[courseId].totalDuration = toDuration(state.coursesStats[courseId].totalSeconds)
		}
    }
})
//#endregion

//#region export the courses reducer and actions:
export const {
    setSearchQuery,
    setCourseId,
    setSectionId,
    setLessonId,
    setCourseStats,
} = coursesSlice.actions
export default coursesSlice.reducer
//#endregion

//#region export some selectors:
export const selectSearchQuery = (state: RootState): string => state.courses.searchQuery
export const selectCourseId = (state: RootState): string => state.courses.courseId
export const selectSectionId = (state: RootState): string => state.courses.sectionId
export const selectLessonId = (state: RootState): string => state.courses.lessonId
export const selectCourseStats = (courseId: string) => (state: RootState) => {
    if(state.courses.coursesStats[courseId]) {
        const { sectionsStats, ...courseStats } = state.courses.coursesStats[courseId]
        return courseStats
    }
    return undefined
}
export const selectSectionStats = (courseId: string, sectionId: string) => (state: RootState) => {
    return state.courses.coursesStats[courseId]
        ? state.courses.coursesStats[courseId].sectionsStats[sectionId]
        : undefined
}
//#endregion
