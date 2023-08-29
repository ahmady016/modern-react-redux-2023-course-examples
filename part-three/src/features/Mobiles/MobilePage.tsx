import React from 'react'
import MobileForm from './MobileForm'
import MobileSearchBar from './MobileSearchBar'
import MobileStatusBar from './MobileStatusBar'
import MobilesList from './MobilesList'

const MobilePage : React.FC = () => {
	return (
        <div className="w-full p-4">
            <h1 className="text-center text-3xl font-semibold">Mobile Shop</h1>
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <MobileForm />
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <MobileSearchBar />
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <MobilesList />
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <MobileStatusBar />
        </div>
    )
}

export default MobilePage
