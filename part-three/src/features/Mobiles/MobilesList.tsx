import React from 'react'

import { useAppSelector } from '../../redux/store'
import { selectMatchedIds, selectMobiles } from './mobilesSlice'

import MobileRow from './MobileRow'

const MobilesList: React.FC = () => {
	const mobiles = useAppSelector(selectMobiles)
	const matchedIds = useAppSelector(selectMatchedIds)
	return (
		<div className="w-full p-4 bg-gray-100 rounded-lg shadow sm:p-8 border border-gray-20 hover:bg-gray-200 hover:border-gray-400 dark:bg-gray-800 dark:border-gray-700">
			<div className="mb-4">
				<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Mobiles</h5>
			</div>
			<div className="flow-root">
				{mobiles.length > 0
					? 	<ul role="list" className="divide-y divide-gray-200 hover:divide-gray-400 dark:divide-gray-700">
							{mobiles.map(mobile => <MobileRow mobile={mobile} matchedIds={matchedIds} /> )}
						</ul>
					:	<p className="text-center p-3">There is no Mobiles right now</p>
				}
			</div>
		</div>
	)
}

export default MobilesList
