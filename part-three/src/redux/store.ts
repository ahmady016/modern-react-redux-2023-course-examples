import { configureStore, AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import authorsReducer, { AuthorType } from '../features/Home/Authors/authorsSlice'
import booksReducer, { BookType } from '../features/Home/Books/booksSlice'
import mobilesReducer, { MobileStateType } from '../features/Mobiles/mobilesSlice'
import resumeReducer, { ResumeStateType } from '../features/Resumes/resumesSlice'
import coursesReducer, { CourseState } from '../features/Courses/RTK_Query/coursesSlice'

import { coursesApi, sectionsApi, lessonsApi } from '../features/Courses/RTK_Query'

// configure the redux store
const store = configureStore({
	reducer: {
		authors: authorsReducer,
		books: booksReducer,
		mobiles: mobilesReducer,
		resumes: resumeReducer,
		courses: coursesReducer,
		// add the generated reducer as a specific top-level slice
		[coursesApi.reducerPath]: coursesApi.reducer,
		[sectionsApi.reducerPath]: sectionsApi.reducer,
		[lessonsApi.reducerPath]: lessonsApi.reducer,
	},
	// adding the api middleware enables caching, invalidation, polling and other useful features of `RTK-Query`
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			coursesApi.middleware,
			sectionsApi.middleware,
			lessonsApi.middleware,
		]),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors of `RTK-Query`
setupListeners(store.dispatch)
export default store

// infer the `RootState` and `AppDispatch` types from the redux store itself
export type DispatchType = ThunkDispatch<
	{
		authors: Record<string, AuthorType>
		books: Record<string, BookType>
		mobiles: MobileStateType
		resumes: ResumeStateType
		courses: CourseState
	},
	undefined,
	AnyAction
>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// use typed [dispatch and selector] instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
