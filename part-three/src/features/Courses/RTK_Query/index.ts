import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react'

export function getErrorMessage(error: FetchBaseQueryError | SerializedError | undefined) {
    console.log("🚀 => getErrorMessage => error:", error)
    if(!error)
        return undefined
    return ('status' in error)
        ? ('error' in error)
            ? `${error.data}\n ${error.error}`
            : `${error.data}`
        : error.message
}

export type DeleteResponse = {
    id: string
    success: boolean
}

export type { Course } from './coursesApi'
export {
    coursesApi,
    useGetCoursesQuery,
    useSearchCoursesQuery,
    useGetCourseQuery,
    useCreateCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation
} from './coursesApi'

export type { Section } from './sectionsApi'
export {
    sectionsApi,
    useGetSectionsQuery,
    useGetSectionQuery,
    useCreateSectionMutation,
    useUpdateSectionMutation,
    useDeleteSectionMutation
} from './sectionsApi'

export type { Lesson } from './lessonsApi'
export {
    lessonsApi,
    useGetLessonsQuery,
    useGetLessonQuery,
    useCreateLessonMutation,
    useUpdateLessonMutation,
    useDeleteLessonMutation
} from './lessonsApi'
