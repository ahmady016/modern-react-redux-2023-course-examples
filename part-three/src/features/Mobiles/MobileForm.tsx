import React from 'react'

import { useAppDispatch } from '../../redux/store'
import { MobileType, createMobile, setMatchedIds } from './mobilesSlice'

import Button from '../../components/Button'

const emptyMobile : MobileType = {
	name: '',
	imageUrl: '',
	releasedAt: '',
    display: '',
    storage: '',
    ram: '',
    battery: '',
    price: 0
}
const MobileForm : React.FC = () => {
    const dispatch = useAppDispatch()

	const [formState, setFormState] = React.useState<MobileType>({ ...emptyMobile })
	const handleInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'name')
            dispatch(setMatchedIds(e.target.value))
		setFormState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
	}, [dispatch])

	const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(createMobile(formState))
		setFormState({ ...emptyMobile })
	}, [formState, dispatch])

	return (
        <fieldset className="p-5 rounded-md border border-solid border-gray-300 bg-gray-100 hover:bg-gray-200 hover:border-gray-400">
            <legend className="w-fit px-3 text-xl">Create Mobile</legend>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-6 sm:gap-4">
                    {/* first row */}
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">Name</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="sm:col-span-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="imageUrl">Image Url</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={formState.imageUrl}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="releasedAt">Released At</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="date"
                            id="releasedAt"
                            name="releasedAt"
                            value={formState.releasedAt}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* second row */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="display">Display</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="display"
                            name="display"
                            value={formState.display}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="storage">Storage</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="storage"
                            name="storage"
                            value={formState.storage}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="ram">RAM</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="ram"
                            name="ram"
                            value={formState.ram}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="battery">Battery</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="battery"
                            name="battery"
                            value={formState.battery}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="price">Price</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="number"
                            id="price"
                            name="price"
                            value={formState.price}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Button className="mt-5 py-3 rounded-md hover:bg-blue-700 hover:border-white hover:font-semibold" primary>Add Mobile</Button>
                    </div>
                </div>
            </form>
        </fieldset>
    )
}

export default MobileForm
