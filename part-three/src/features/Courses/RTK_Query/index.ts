export type DeleteResponse = {
    id: string
    success: boolean
}

export {
    coursesApi,
    useGetCoursesQuery,
    useSearchCoursesQuery,
    useGetCourseQuery,
    useCreateCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation
} from './coursesApi'

export {
    sectionsApi,
    useGetSectionsQuery,
    useGetSectionQuery,
    useCreateSectionMutation,
    useUpdateSectionMutation,
    useDeleteSectionMutation
} from './sectionsApi'

export {
    lessonsApi,
    useGetLessonsQuery,
    useGetLessonQuery,
    useCreateLessonMutation,
    useUpdateLessonMutation,
    useDeleteLessonMutation
} from './lessonsApi'
