import { TagDescription, createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { DeleteResponse } from "."

const LESSONS = 'LESSONS'
export type Lesson = {
    id: string
    title: string
    length: string
    sectionId: string
}

function lessonsListTags(result: Lesson[] | undefined) {
    const listTag: TagDescription<"LESSONS"> = { type: LESSONS, id: result ? result[0].sectionId : 'LIST' }
    const tags = [listTag]
    if(result)
        for (const { id } of result)
            tags.unshift({ type: LESSONS, id })
    return tags
}

export const lessonsApi = createApi({
    reducerPath: 'lessonsApi',
    tagTypes: [LESSONS],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/lessons' }),
    endpoints: (builder) => ({
        getLessons: builder.query<Lesson[], string>({
            query: (sectionId: string) => ({ url: '', params: { sectionId } }),
            providesTags: lessonsListTags,
        }),
        getLesson: builder.query<Lesson, string>({
            query: (id: string) => ({ url: `/${id}`}),
            providesTags: (_, __, id) => [{ type: LESSONS, id }],
        }),
        createLesson: builder.mutation<Lesson, Partial<Lesson>>({
            query: (newLesson) => ({ url: '/', method: 'POST', body: newLesson }),
            invalidatesTags: (_, __, { sectionId }) => {
                const tag: TagDescription<"LESSONS"> = { type: LESSONS, id: sectionId }
                return [tag]
            }
        }),
        updateLesson: builder.mutation<Lesson, Partial<Lesson> & Pick<Lesson,'id'>>({
            query: ({ id, ...updatedLesson }) => ({ url: `/${id}`, method: 'PATCH', body: updatedLesson }),
            invalidatesTags: (_, __, { id }) => {
                const tag: TagDescription<"LESSONS"> = { type: LESSONS, id }
                return [tag]
            },
        }),
        deleteLesson: builder.mutation<DeleteResponse, string>({
            query: (id: string) => ({ url: `/${id}`, method: 'DELETE' }),
            invalidatesTags: (_, __, id) => [{ type: LESSONS, id }],
        })
    })
})

export const {
    useGetLessonsQuery,
    useGetLessonQuery,
    useCreateLessonMutation,
    useUpdateLessonMutation,
    useDeleteLessonMutation
} = lessonsApi
