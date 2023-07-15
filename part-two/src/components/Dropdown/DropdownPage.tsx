import React from 'react'

import Dropdown from './Dropdown'

import data from './data'

const DropdownPage: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false)
	const toggleOpened = React.useCallback(() => setIsOpen((isOpen) => !isOpen), [])

	const [selectedValue, setSelectedValue] = React.useState<string>('')
	const handleChange = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
		setSelectedValue(e.currentTarget.id)
		setIsOpen(false)
	}, [])

	return (
		<Dropdown
            options={data}
			isOpen={isOpen}
			toggleOpened={toggleOpened}
			value={selectedValue}
			onChange={handleChange}
		/>
	)
}

export default DropdownPage
