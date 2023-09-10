/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { AsyncThunk } from "@reduxjs/toolkit"

import { useAppDispatch } from "../../redux/store"

function useAsyncThunk(thunk: AsyncThunk<any, any, any> | AsyncThunk<any, void, any>)
: [(params?: any) => void, boolean, string] {
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    const dispatch = useAppDispatch()
    const run = React.useCallback((params?: any) => {
        setIsLoading(true)
        dispatch(thunk(params))
            .unwrap()
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [dispatch, thunk])

    return [run, isLoading, error]
}

export default useAsyncThunk
