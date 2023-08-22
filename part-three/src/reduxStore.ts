import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import authorsReducer from './features/Home/Authors/authorsSlice'
import booksReducer from './features/Home/Books/booksSlice'

// configure the redux store
const store = configureStore({
    reducer: {
        authors: authorsReducer,
        books: booksReducer
    }
})
export default store

// infer the `RootState` and `AppDispatch` types from the redux store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// use typed [dispatch and selector] instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
