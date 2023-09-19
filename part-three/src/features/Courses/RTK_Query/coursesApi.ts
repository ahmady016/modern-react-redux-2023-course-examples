import { createApi, fetchBaseQuery, TagDescription } from '@reduxjs/toolkit/query/react'
import { DeleteResponse, Section } from '.'

const COURSES = 'COURSES'
export type Course = {
    id: string
    title: string
    description: string
    imageUrl: string
    rate: number
    students: number
    createdBy: string
    updatedAt: string
    price: number
}
export type CourseWithSections = Course & {
    sections: Section[]
}

function coursesListTags(result: Course[] | undefined) {
    const listTag: TagDescription<"COURSES"> = { type: COURSES, id: 'LIST' }
    const tags = [listTag]
    if(result)
        for (const { id } of result)
            tags.unshift({ type: COURSES, id })
    return tags
}
export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    tagTypes: [COURSES],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/courses' }),
    endpoints: (builder) => ({
        getCourses: builder.query<Course[], void>({
            query: () => ({ url: '/'}),
            providesTags: coursesListTags,
        }),
        searchCourses: builder.query<Course[], string>({
            query: (q: string) => ({ url: '/', params: { q }}),
            providesTags: coursesListTags,
        }),
        getCourse: builder.query<Course, string>({
            query: (id: string) => ({ url: `/${id}`}),
            providesTags: (_, __, id) => [{ type: COURSES, id }],
        }),
        getCourseWithSections: builder.query<CourseWithSections, string>({
            query: (id: string) => ({ url: `/${id}?_embed=sections`}),
            providesTags: (_, __, id) => [{ type: COURSES, id }],
        }),
        createCourse: builder.mutation<Course, Partial<Course>>({
            query: (newCourse) => ({ url: '/', method: 'POST', body: newCourse }),
            invalidatesTags: [{ type: COURSES, id: 'LIST' }]
        }),
        updateCourse: builder.mutation<Course, Partial<Course> & Pick<Course,'id'>>({
            query: ({ id, ...updatedCourse }) => ({ url: `/${id}`, method: 'PATCH', body: updatedCourse }),
            invalidatesTags: (_, __, { id }) => {
                const tag: TagDescription<"COURSES"> = { type: COURSES, id }
                return [tag]
            },
        }),
        deleteCourse: builder.mutation<DeleteResponse, string>({
            query: (id: string) => ({ url: `/${id}`, method: 'DELETE' }),
            invalidatesTags: (_, __, id) => [{ type: COURSES, id }],
        })
    })
})

export const {
    useGetCoursesQuery,
    useSearchCoursesQuery,
    useGetCourseQuery,
    useGetCourseWithSectionsQuery,
    useCreateCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation
} = coursesApi
