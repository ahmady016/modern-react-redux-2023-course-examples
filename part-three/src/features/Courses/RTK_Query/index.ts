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
