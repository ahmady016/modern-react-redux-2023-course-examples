/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction, Action } from '@reduxjs/toolkit'
import { RootState } from '../../redux/store'
import axios from 'axios'

//#region define the slice state types:
export type ResumeType = {
	name: string
	title: string
	bio: string
	email: string
	mobile: string
	birthDate: string
	gender: 'male' | 'female'
	address: string
	qualifications: string[]
	skills: string[]
	experiences: string[]
}
export type ResumeWithIdType = ResumeType & { id: string }
export type ViewModeType = 'form' | 'details'
export type ResumeStateType = {
    viewMode: ViewModeType
	selectedId: string
    list: Record<string, ResumeType>
}
// define the initial state
const initialState: ResumeStateType = {
	viewMode: 'form',
	selectedId: '',
	list: {}
}
//#endregion

//#region crud operations with AsyncThunk:
export const fetchResumes = createAsyncThunk(
	'resumes/fetchResumes',
	async () => {
		const { data } = await axios.get('http://localhost:3000/resumes')
		return data
	}
)
export const fetchResume = createAsyncThunk(
	'resumes/fetchResume',
	async (id: string) => {
		const { data } = await axios.get(`http://localhost:3000/resumes/${id}`)
		return data
	}
)
export const createResume = createAsyncThunk(
	'resumes/createResume',
	async (resume: ResumeWithIdType) => {
		const { data } = await axios.post(`http://localhost:3000/resumes`, resume)
		return data
	}
)
export const updateResume = createAsyncThunk(
	'resumes/updateResume',
	async (resume: ResumeWithIdType) => {
		const { data } = await axios.put(`http://localhost:3000/resumes/${resume.id}`, resume)
		return data
	}
)
export const removeResume = createAsyncThunk(
	'resumes/removeResume',
	async (id: string) => {
		await axios.delete(`http://localhost:3000/resumes/${id}`)
		return id
	}
)
//#endregion

//#region define the resumes slice:
export const resumesSlice = createSlice({
	name: 'resumes',
	initialState,
	reducers: {
		setFormMode(state, _: Action) {
			state.viewMode = 'form'
		},
		setDetailsMode(state, _: Action) {
			state.viewMode = 'details'
		},
		setSelectedId(state, action: PayloadAction<string>) {
			state.selectedId = action.payload
		}
	},
	extraReducers(builder) {
		builder.addCase(
			fetchResumes.fulfilled,
			(state, action: PayloadAction<ResumeWithIdType[]>) => {
				state.list = action.payload.reduce<Record<string, ResumeType>>(
					(resumes, item) => {
						const { id, ...resume } = item
						resumes[id] = resume
						return resumes
					}, {})
			}
		)

		builder.addCase(
			fetchResume.fulfilled,
			(state, action: PayloadAction<ResumeWithIdType>) => {
				const { id, ...resume } = action.payload
				state.list[id] = resume
			}
		)

		builder.addCase(
			createResume.fulfilled,
			(state, action: PayloadAction<ResumeWithIdType>) => {
				const { id, ...resume } = action.payload
				state.list[id] = resume
			}
		)

		builder.addCase(
			updateResume.fulfilled,
			(state, action: PayloadAction<ResumeWithIdType>) => {
				const { id, ...resume } = action.payload
				state.list[id] = resume
			}
		)

		builder.addCase(
			removeResume.fulfilled,
			(state, action: PayloadAction<string>) => {
				if(state.selectedId === action.payload)
					state.selectedId = ''
				delete state.list[action.payload]
			}
		)
	},
})
//#endregion

//#region export some selectors:
export const selectViewMode = (state: RootState): ViewModeType => state.resumes.viewMode
export const selectResumes = (state: RootState): ResumeWithIdType[] => {
	const resumes = Object.entries(state.resumes.list)
	return resumes.length > 0
		? resumes.map(([id, resume]) => ({ id, ...resume }))
		: []
}
export const selectResume = (id: string) => (state: RootState): ResumeWithIdType => {
	const resume = state.resumes.list[id]
	return { id, ...resume }
}
export const selectCurrentResume = (state: RootState): ResumeWithIdType | undefined => {
	const id = state.resumes.selectedId
	if(id) {
		const resume = state.resumes.list[state.resumes.selectedId]
		return { id: state.resumes.selectedId, ...resume }
	}
}
//#endregion

// export the resumes reducer and actions
export const { setFormMode, setDetailsMode, setSelectedId } = resumesSlice.actions
export default resumesSlice.reducer
