/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { useFetchPhotos } from './unsplashApi'

import { PhotoSearchBar } from './components/PhotoSearchBar'
import { PhotoStatusBar } from './components/PhotoStatusBar'
import { PhotoViewer } from './components/PhotoViewer'
import { PhotoPagingBar } from './components/PhotoPagingBar'

export type ViewType = 'details' | 'thumbnails'
const PhotosPage: React.FC = () => {
	const [search, setSearch] = React.useState<string>('')
	const [query, setQuery] = React.useState<string>('')

	const [view, setView] = React.useState<ViewType>('details')

	const [page, setPage] = React.useState<number>(1)
	const { status, fetchStatus, error, data, isPreviousData } = useFetchPhotos(query, page)

	const handleSearchChange = React.useCallback((e: any) => {
		setSearch(e.target.value)
	}, [])
	const handleSubmit = React.useCallback(
		(e: any) => {
			e.preventDefault()
			setQuery(search)
			setSearch('')
		},
		[search]
	)

	const toDetailsView = React.useCallback(() => {
		setView('details')
	}, [])
	const toThumbnailsView = React.useCallback(() => {
		setView('thumbnails')
	}, [])

	const goBack = React.useCallback(() => {
		setPage((oldPage) => Math.max(oldPage - 1, 1))
	}, [])
	const goNext = React.useCallback(() => {
		if (!isPreviousData && data && data.total_pages > page)
			setPage((oldPage) => oldPage + 1)
	}, [isPreviousData, data, page])

	return (
		<>
			<PhotoSearchBar
				search={search}
				handleSearchChange={handleSearchChange}
				handleSubmit={handleSubmit}
			/>
			<PhotoStatusBar
				view={view}
				query={query}
				data={data}
				toDetailsView={toDetailsView}
				toThumbnailsView={toThumbnailsView}
			/>
			<PhotoViewer
				status={status}
				fetchStatus={fetchStatus}
				error={error}
				data={data}
				view={view}
			/>
			<PhotoPagingBar
				page={page}
				data={data}
				isPreviousData={isPreviousData}
				goBack={goBack}
				goNext={goNext}
			/>
		</>
	)
}

export default PhotosPage
