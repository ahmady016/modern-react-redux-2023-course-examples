/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import Country from "./Country"

import { CountryType, getRandomCountry } from "./countriesHelpers"

const CountriesPage: React.FC = () => {
    const [countries, setCountries] = React.useState<CountryType[]>([])

    const handleClick = React.useCallback(() => {
        setCountries([...countries, getRandomCountry()])
    }, [countries])

	return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4>Countries</h4>
                <button
                    className="btn waves-effect waves-light"
                    onClick={handleClick}
                >
                    <i className="material-icons right">youtube_searched_for</i>
                    Pick a Country
                </button>
            </li>
            {countries.map(country => <Country key={country.name} {...country} />)}
        </ul>
    )
}

export default CountriesPage
