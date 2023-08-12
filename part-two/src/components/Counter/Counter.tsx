import React from 'react'
import { RxMinusCircled, RxPlusCircled } from 'react-icons/rx'
import Button from '../Button/Button'
import Panel from '../Dropdown/Panel'

const INCREMENT_COUNT_BY_ONE = 'INCREMENT_COUNT_BY_ONE'
const DECREMENT_COUNT_BY_ONE = 'DECREMENT_COUNT_BY_ONE'
const SET_INPUT_VALUE = 'SET_INPUT_VALUE'
const INCREMENT_COUNT_BY_VALUE = 'INCREMENT_COUNT_BY_VALUE'
const DECREMENT_COUNT_BY_VALUE = 'DECREMENT_COUNT_BY_VALUE'

type CounterState = {
    countValue: number
    inputValue: number
}
type CounterAction = {
    type: string
    payload: number
}
const counterReducer : React.Reducer<CounterState, CounterAction> = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT_BY_ONE:
            return {
                ...state,
                countValue: state.countValue + 1
            }
        case DECREMENT_COUNT_BY_ONE:
            return {
                ...state,
                countValue: state.countValue - 1
            }
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload
            }
        case INCREMENT_COUNT_BY_VALUE:
            return {
                ...state,
                countValue: state.countValue + state.inputValue
            }
        case DECREMENT_COUNT_BY_VALUE:
            return {
                ...state,
                countValue: state.countValue - state.inputValue
            }
        default:
            return state
    }
}

type CounterProps = {
    initialValue: number
}
const Counter: React.FC<CounterProps> = ({ initialValue }) => {
    const [{ countValue, inputValue }, dispatch] = React.useReducer(counterReducer, {
        countValue: initialValue,
        inputValue: 0
    })

    const handleIncrementByOne = React.useCallback(() => {
        dispatch({ type: 'INCREMENT_COUNT_BY_ONE', payload: 0 })
    }, [])
    const handleDecrementByOne = React.useCallback(() => {
        dispatch({ type: 'DECREMENT_COUNT_BY_ONE', payload: 0 })
    }, [])
    const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_INPUT_VALUE', payload: parseInt(e.currentTarget.value) || 0 })
    }, [])
    const handleIncrementByValue = React.useCallback(() => {
        dispatch({ type: 'INCREMENT_COUNT_BY_VALUE', payload: 0 })
    }, [])
    const handleDecrementByValue = React.useCallback(() => {
        dispatch({ type: 'DECREMENT_COUNT_BY_VALUE', payload: 0 })
    }, [])

	return (
        <Panel className="w-1/2 mx-auto rounded-lg bg-gray-200 hover:bg-gray-300">
            <h2 className="w-64 m-auto text-center text-2xl text-blue-700 font-bold">Counter</h2>
            <form>
                <div className="w-64 m-auto flex justify-center items-center">
                    <Button
                        secondary
                        rounded
                        type="button"
                        title="Decrement by 1"
                        className="w-32 text-center"
                        onClick={handleDecrementByOne}
                    >
                        <RxMinusCircled className="ml-1" />
                    </Button>
                    <label className="w-40 p-3 mx-2 text-center text-3xl text-blue-700 font-semibold">{countValue}</label>
                    <Button
                        primary
                        rounded
                        type="button"
                        title="Increment by 1"
                        className="w-32 text-center"
                        onClick={handleIncrementByOne}
                    >
                        <RxPlusCircled className="ml-1" />
                    </Button>
                </div>
                <div className="w-64 m-auto flex justify-center items-center">
                    <Button
                        danger
                        rounded
                        type="button"
                        title={`Decrement by ${inputValue}`}
                        className="w-32 text-center"
                        onClick={handleDecrementByValue}
                    >
                        <RxMinusCircled className="ml-1" />
                    </Button>
                    <input className="w-20 m-3 py-2 bg-gray-50 border border-gray-300 text-center" type="number" value={inputValue || ''} onChange={handleInputChange} />
                    <Button
                        success
                        rounded
                        type="button"
                        title={`Increment by ${inputValue}`}
                        className="w-32 text-center"
                        onClick={handleIncrementByValue}
                    >
                        <RxPlusCircled className="ml-1" />
                    </Button>
                </div>
            </form>
        </Panel>
    )
}

export default Counter
