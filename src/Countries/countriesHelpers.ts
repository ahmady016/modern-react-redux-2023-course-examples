/* eslint-disable @typescript-eslint/no-explicit-any */
import countries from './countries.json'

export type CountryType = {
	name: string,
    officialName: string,
    code: string,
    flag: any,
    currency: string,
	callingCodes: Array<string>,
    languages: Array<string>,
	capital: string,
    region: string,
    subregion: string,
    latitude: number,
	longitude: number,
}

function mapCountry(country: any) : CountryType {
	return {
		name: country.name.common,
		officialName: country.name.official,
		code: country.cca2,
		flag: country.flag,
		callingCodes: country.callingCodes,
		currency: country.currencies[Object.keys(country.currencies)[0]].name,
		languages: Object.values(country.languages),
		capital: country.capital,
		region: country.region,
		subregion: country.subregion,
		latitude: country.latlng[0],
		longitude: country.latlng[0],
	}
}

export function getCountries() {
    return countries.map(mapCountry)
}

export function getRandomCountry() {
    return mapCountry(countries[Math.floor(Math.random() * countries.length)])
}
