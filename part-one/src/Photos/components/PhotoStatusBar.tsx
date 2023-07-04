import React from 'react'

import { PhotoResult } from '../unsplashApi'
import { ViewType } from '../PhotosPage'

type PhotoStatusBarProps = {
	view: ViewType
	query: string
	data: PhotoResult | undefined
	toDetailsView: () => void
	toThumbnailsView: () => void
}
export const PhotoStatusBar: React.FC<PhotoStatusBarProps> = ({
	view,
	query,
	data,
	toDetailsView,
	toThumbnailsView,
}) => {
	return (
		<div className="w-100 flex-between">
			<div className="flex-b-80 flex">
				<div className="mr-1">
					<em>Searching For: </em>
					<span className="font-s-12">{query}</span>
				</div>
				<div className="ml-1">
					<span className="font-s-12">{data?.results.length || 0}</span>
					<em> results found.</em>
				</div>
			</div>
			<div className="flex-b-20 flex-end">
				<button
					className="btn waves-effect grey lighten-3 mr-1"
					title="details"
					onClick={toDetailsView}
					disabled={view === 'details'}
				>
					<i className="material-icons grey-text darker-3">storage</i>
				</button>
				<button
					className="btn waves-effect grey lighten-3"
					title="thumbnails"
					onClick={toThumbnailsView}
					disabled={view === 'thumbnails'}
				>
					<i className="material-icons grey-text darker-3">view_quilt</i>
				</button>
			</div>
		</div>
	)
}
