import React from 'react'

import Button from '../../components/Button'

const MobileForm : React.FC = () => {
	return (
        <fieldset className="p-5 rounded-md border border-solid border-gray-300 bg-gray-100 hover:bg-gray-200 hover:border-gray-400">
            <legend className="w-fit px-3 text-xl">Create Mobile</legend>
            <form>
                <div className="grid gap-4 sm:grid-cols-6 sm:gap-4">
                    {/* first row */}
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="name">Name</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="name"
                            name="name"
                        />
                    </div>
                    <div className="sm:col-span-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="imageUrl">Image Url</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="releasedAt">Released At</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="date"
                            id="releasedAt"
                            name="releasedAt"
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
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="storage">Storage</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="storage"
                            name="storage"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="ram">RAM</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="ram"
                            name="ram"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="battery">Battery</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="text"
                            id="battery"
                            name="battery"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="price">Price</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type="number"
                            id="price"
                            name="price"
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
