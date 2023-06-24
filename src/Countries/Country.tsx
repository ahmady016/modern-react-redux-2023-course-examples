import { CountryType } from './countriesHelpers'

const Country: React.FC<CountryType> = ({
	name,
	officialName,
	flag,
	code,
	callingCodes,
}) => {
	return (
		<li className="collection-item avatar">
			<i className="circle grey lighten-2 blue-grey-text text-darker-4">{flag}</i>
			<span className="title">{name}</span>
			<p>{officialName}</p>
			<p>{code}</p>
			<p>{callingCodes.join(', ')}</p>
		</li>
	)
}

export default Country
