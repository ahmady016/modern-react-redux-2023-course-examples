/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

type PhotoSearchBarProps = {
	search: string
	handleSearchChange: (e: any) => void
	handleSubmit: (e: any) => void
}
export const PhotoSearchBar: React.FC<PhotoSearchBarProps> = ({
	search,
	handleSearchChange,
	handleSubmit,
}) => {
	return (
		<form className="row" onSubmit={handleSubmit}>
			<div className="input-field col l10">
				<input
					type="text"
					name="search"
					placeholder="Search Photos"
					value={search}
					onChange={handleSearchChange}
				/>
			</div>
			<div className="input-field col l2 mt-15">
				<button type="submit" className="btn waves-effect waves-light w-100">
					Search
				</button>
			</div>
		</form>
	)
}
