import React from 'react'

import Dropdown from './Dropdown'
import { countries, days, languages } from './data'

const DropdownPage: React.FC = () => {
	const [selectedCountry, setSelectedCountry] = React.useState<string>('')
	const handleCountryChange = React.useCallback((country: string) => void setSelectedCountry(country), [])

	const [selectedLanguage, setSelectedLanguage] = React.useState<string>('')
	const handleLanguageChange = React.useCallback((language: string) => void setSelectedLanguage(language), [])

	const [selectedDay, setSelectedDay] = React.useState<string>('')
	const handleDayChange = React.useCallback((day: string) => void setSelectedDay(day), [])

	return (
		<>
			<Dropdown
				options={countries}
				label="Select Country ..."
				value={selectedCountry}
				onChange={handleCountryChange}
			/>
			<Dropdown
				options={languages}
				label='Select language ...'
				value={selectedLanguage}
				onChange={handleLanguageChange}
			/>
			<Dropdown
				options={days}
				label='Select Day ...'
				value={selectedDay}
				onChange={handleDayChange}
			/>
		</>
	)
}

export default DropdownPage
