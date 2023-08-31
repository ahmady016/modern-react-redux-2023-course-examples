import React from "react"
import { FiX } from "react-icons/fi"

import { useAppDispatch } from "../../redux/store"
import { MobileWithIdType, removeMobile } from "./mobilesSlice"

type MobileRowProps = {
	mobile: MobileWithIdType
	matchedIds: string[]
}
const MobileRow : React.FC<MobileRowProps> = ({
	mobile : { id, name, imageUrl, releasedAt, display, storage, ram, battery, price },
	matchedIds
}) => {
	const dispatch = useAppDispatch()
	const handleRemove = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(removeMobile(e.currentTarget.id))
	}, [dispatch])

	const isFound = matchedIds.includes(id)
	return (
		<li className="py-3 sm:py-4">
			<div className="flex justify-around items-center space-x-4">
				<div className="flex-shrink-0">
					<img className="w-12 h-12 rounded-full" src={imageUrl} alt={name} />
				</div>
				<div className={`flex-1 ${isFound ? 'font-bold' : ''}`}>
					<p className={`text-sm text-gray-900 truncate dark:text-white ${isFound ? 'font-bold' : 'font-medium'}`}>{name}</p>
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">Released At {releasedAt}</p>
				</div>
				<div className={`flex-grow flex items-center justify-between text-base text-gray-900 dark:text-white ${isFound ? 'font-bold' : 'font-medium'}`}>
					<p>{display}</p>
					<p>{storage}</p>
					<p>{ram}</p>
					<p>{battery}</p>
					<p>${price}</p>
				</div>
				<button
					className="h-6 w-6 relative left-3 rounded-full bg-red-300 text-red-700 hover:bg-red-400 hover:text-red-900 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
					id={id}
					type="button"
					onClick={handleRemove}
				>
					<FiX className="m-auto" />
				</button>
			</div>
		</li>
	)
}

export default MobileRow
