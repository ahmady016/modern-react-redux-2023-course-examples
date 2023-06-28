import React from 'react'
import { FetchStatus } from '@tanstack/react-query'

import { MaterializeSpinner } from './MaterializeSpinner'
import { PhotoDetailsView } from './PhotoDetailsView'
import { PhotoThumbnailsView } from './PhotoThumbnailsView'

import { PhotoResult } from '../unsplashApi'
import { ViewType } from '../PhotosPage'

type PhotoViewerProps = {
	status: 'error' | 'loading' | 'success'
	fetchStatus: FetchStatus
	error: Error | null
	data: PhotoResult | undefined
	view: ViewType
}
export const PhotoViewer: React.FC<PhotoViewerProps> = ({
	status,
	fetchStatus,
	error,
	data,
	view,
}) => {
	if (fetchStatus === 'fetching')
		return <MaterializeSpinner />
	else if (status === 'error' && fetchStatus === 'idle')
		return <div>Error: {error?.message}</div>
	else if (data)
		return (
			<>
				<ul className="collection with-header">
					<li className="collection-header">
						<h4>Photos</h4>
					</li>
					{view === 'details' && <PhotoDetailsView photos={data.results} />}
				</ul>
				{view === 'thumbnails' && <PhotoThumbnailsView photos={data.results} />}
			</>
		)
	else
		return null
}
