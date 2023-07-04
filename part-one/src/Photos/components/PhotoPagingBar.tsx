import React from 'react'

import { PhotoResult } from '../unsplashApi'

type PhotoPagingBarProps = {
	page: number
	data: PhotoResult | undefined
	isPreviousData: boolean
	goBack: () => void
	goNext: () => void
}
export const PhotoPagingBar: React.FC<PhotoPagingBarProps> = ({
	page,
	data,
	isPreviousData,
	goBack,
	goNext,
}) => {
	if (data)
		return (
			<div className="flex-center my-2">
				<button
					className="btn waves-effect waves-light"
					onClick={goBack}
					disabled={page === 1}
				>
					<i className="material-icons left">keyboard_arrow_left</i>
					Previous
				</button>
				<span className="mx-2">Page: {page}</span>
				<button
					className="btn waves-effect waves-light"
					onClick={goNext}
					disabled={page === data?.total_pages || isPreviousData}
				>
					<i className="material-icons right">keyboard_arrow_right</i>
					Next
				</button>
			</div>
		)
	return null
}
