/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit"
import { RootState } from "../../redux/store"

// define a type for the slice state
export type MobileType = {
	name: string
	imageUrl: string
	releasedAt: string
    display: string
    storage: string
    ram: string
    battery: string
    price: number
}
export type MobileStateType = {
    searchQuery: string
    list: Record<string, MobileType>
	matchedIds: string[]
}
// define the initial state
const initialState : MobileStateType = {
    searchQuery: '',
    list: {
		[nanoid(10)]: {
			name: 'Samsung Galaxy F54',
			imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f54-5g.jpg',
			releasedAt: '2023-06-13',
			display: '6.7"',
			storage: '256GB',
			ram: '8GB',
			battery: '6000mAh',
			price: 400
		},
		[nanoid(10)]: {
			name: 'Xiaomi Redmi Note 12R',
			imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-12r.jpg',
			releasedAt: '2023-06-28',
			display: '6.79"',
			storage: '256GB',
			ram: '8GB',
			battery: '5000mAh',
			price: 200
		},
		[nanoid(10)]: {
			name: 'Oppo K11',
			imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-k11-5g.jpg',
			releasedAt: '2023-08-01',
			display: '6.7"',
			storage: '512GB',
			ram: '12GB',
			battery: '5000mAh',
			price: 240
		},
		[nanoid(10)]: {
			name: 'Huawei nova 11',
			imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/huawei-nova11.jpg',
			releasedAt: '2023-04-27',
			display: '6.7"',
			storage: '512GB',
			ram: '8GB',
			battery: '4500mAh',
			price: 400
		},
		[nanoid(10)]: {
			name: 'Infinix Note 30',
			imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/infinix-note30-4g.jpg',
			releasedAt: '2023-05-22',
			display: '6.78"',
			storage: '256GB',
			ram: '8GB',
			battery: '5000mAh',
			price: 280
		},
		[nanoid(10)]: {
			name: 'Samsung Galaxy A54',
			imageUrl: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg',
			releasedAt: '2023-03-24',
			display: '6.4"',
			storage: '256GB',
			ram: '8GB',
			battery: '5000mAh',
			price: 360
		},
	},
	matchedIds: []
}
// define the mobiles slice
export const mobilesSlice = createSlice({
	name: 'mobiles',
	initialState,
	reducers: {
		createMobile(state, action: PayloadAction<MobileType>) {
			state.list[nanoid(10)] = action.payload
		},
		removeMobile(state, action: PayloadAction<string>) {
			delete state.list[action.payload]
		},
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload
        },
		setMatchedIds(state, action: PayloadAction<string>) {
			state.matchedIds = Object.entries(state.list)
				.filter(([_, mobile]) => mobile.name.toLowerCase().includes(action.payload.toLowerCase()))
				.map(([id, _]) => id)
		}
	}
})

// export the mobiles reducer and actions
export const { createMobile, removeMobile, setSearchQuery, setMatchedIds } = mobilesSlice.actions
export default mobilesSlice.reducer

// export some selectors
export type MobileWithIdType = MobileType & { id: string }
export const selectMobiles = (state: RootState): MobileWithIdType[] => {
	let mobiles = Object.entries(state.mobiles.list)
    if(state.mobiles.searchQuery)
        mobiles = mobiles.filter(([_, mobile]) => mobile.name.toLowerCase().includes(state.mobiles.searchQuery.toLowerCase()))
	return mobiles.length
		? mobiles.map(([id, mobile]) => ({ id, ...mobile }))
		: []
}
export const selectMatchedIds = (state: RootState): string[] => state.mobiles.matchedIds
export const selectMobilesCount = (state: RootState): number => {
	let mobiles = Object.entries(state.mobiles.list)
    if(state.mobiles.searchQuery)
        mobiles = mobiles.filter(([_, mobile]) => mobile.name.toLowerCase().includes(state.mobiles.searchQuery.toLowerCase()))
	return mobiles.length
}
export const selectTotalCost = (state: RootState): number => {
	let mobiles = Object.entries(state.mobiles.list)
    if(state.mobiles.searchQuery)
        mobiles = mobiles.filter(([_, mobile]) => mobile.name.toLowerCase().includes(state.mobiles.searchQuery.toLowerCase()))
	return mobiles.length
		? mobiles.reduce((total, [_, mobile]) => total + mobile.price, 0)
		: 0
}
