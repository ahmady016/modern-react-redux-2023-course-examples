import React from 'react'

const MobileStatusBar : React.FC = () => {
	return (
        <section className="flex items-center justify-around">
            <div className="w-1/6 flex justify-start">
                <span className="text-3xl font-bold text-gray-900 dark:text-white mr-3">Count: </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">4</span>
            </div>
            <div className="w-1/6 flex justify-around">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">Total: </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$1200</span>
            </div>
        </section>
    )
}

export default MobileStatusBar
