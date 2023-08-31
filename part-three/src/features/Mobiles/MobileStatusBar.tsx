import React from 'react'

import { useAppSelector } from '../../redux/store'
import { selectMobilesCount, selectTotalCost } from './mobilesSlice'

const MobileStatusBar : React.FC = () => {
    const totalCost = useAppSelector(selectTotalCost)
    const mobilesCount = useAppSelector(selectMobilesCount)
	return (
        <section className="flex items-center justify-around">
            <div className="w-1/6 flex justify-start">
                <span className="text-3xl font-bold text-gray-900 dark:text-white mr-3">Count: </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{mobilesCount}</span>
            </div>
            <div className="w-1/6 flex justify-around">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">Total: </span>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${totalCost}</span>
            </div>
        </section>
    )
}

export default MobileStatusBar
