import { TagDescription, createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { DeleteResponse, Lesson } from "."

const SECTIONS = 'SECTIONS'
export type Section = {
    id: string
    title: string
    courseId: string
}
export type SectionWithLessons = Section & {
    lessons: Lesson[]
}

function sectionsListTags(result: Section[] | undefined) {
    const listTag: TagDescription<"SECTIONS"> = { type: SECTIONS, id: result ? result[0].courseId : 'LIST' }
    const tags = [listTag]
    if(result)
        for (const { id } of result)
            tags.unshift({ type: SECTIONS, id })
    return tags
}
export const sectionsApi = createApi({
    reducerPath: 'sectionsApi',
    tagTypes: [SECTIONS],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/sections' }),
    endpoints: (builder) => ({
        getSections: builder.query<Section[], string>({
            query: (courseId: string) => ({ url: '', params: { courseId } }),
            providesTags: sectionsListTags,
        }),
        getSection: builder.query<Section, string>({
            query: (id: string) => ({ url: `/${id}`}),
            providesTags: (_, __, id) => [{ type: SECTIONS, id }],
        }),
        getSectionWithLessons: builder.query<SectionWithLessons, string>({
            query: (id: string) => ({ url: `/${id}?_embed=lessons` }),
            providesTags: (_, __, id) => [{ type: SECTIONS, id }],
        }),
        createSection: builder.mutation<Section, Partial<Section>>({
            query: (newSection) => ({ url: '', method: 'POST', body: newSection }),
            invalidatesTags: (_, __, { courseId }) => {
                const tag: TagDescription<"SECTIONS"> = { type: SECTIONS, id: courseId }
                return [tag]
            }
        }),
        updateSection: builder.mutation<Section, Partial<Section> & Pick<Section,'id'>>({
            query: ({ id, ...updatedSection }) => ({ url: `/${id}`, method: 'PATCH', body: updatedSection }),
            invalidatesTags: (_, __, { id }) => {
                const tag: TagDescription<"SECTIONS"> = { type: SECTIONS, id }
                return [tag]
            },
        }),
        deleteSection: builder.mutation<DeleteResponse, string>({
            query: (id: string) => ({ url: `/${id}`, method: 'DELETE' }),
            invalidatesTags: (_, __, id) => [{ type: SECTIONS, id }],
        })
    })
})

export const {
    useGetSectionsQuery,
    useGetSectionQuery,
    useGetSectionWithLessonsQuery,
    useCreateSectionMutation,
    useUpdateSectionMutation,
    useDeleteSectionMutation
} = sectionsApi
