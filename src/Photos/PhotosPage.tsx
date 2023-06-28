/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import styled from '@emotion/styled'

import { MaterializeSpinner } from './MaterializeSpinner'
import { Photo, useFetchPhotos } from './unsplashApi'

type PhotoViewProps = {
	photos: Photo[]
}
const PhotoDetailsView: React.FC<PhotoViewProps> = ({ photos }) => {
	return photos.map(({ id, urls, alt_description, likes, created_at }) =>
		<li className="collection-item avatar" key={id}>
			<img className="circle" src={urls.thumb} alt={alt_description} />
			<span className="title">{alt_description}</span>
			<p>liked: {likes}</p>
			<p>createdAt: {created_at}</p>
		</li>
	)
}
const PhotoGallery = styled.div`
	padding: 0;
	margin: 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-auto-rows: 240px;
	grid-gap: 10px;
	& img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.1s;
		grid-row-end: span 1;
		&:hover {
			filter: sepia(100%);
		}
		&:nth-child(2n+1) {
			grid-row-end: span 2;
		}
	}
`
const PhotoThumbnailsView: React.FC<PhotoViewProps> = ({ photos }) => {
	return (
		<PhotoGallery>
			{photos.map(({ id, urls, alt_description }) =>
				<img key={id} src={urls.thumb} alt={alt_description} title={alt_description} />
			)}
		</PhotoGallery>
	)
}

type ViewType = 'details' | 'thumbnails'
const PhotosPage: React.FC = () => {
	const [view, setView] = React.useState<ViewType>('details')

	const [search, setSearch] = React.useState<string>('')

	const [query, setQuery] = React.useState<string>('')
	const [page, setPage] = React.useState<number>(1)

	const { status, fetchStatus, error, data, isPreviousData } = useFetchPhotos(query, page)

	const toDetailsView = React.useCallback(() => {
		setView('details')
	}, [])

	const toThumbnailsView = React.useCallback(() => {
		setView('thumbnails')
	}, [])

	const handleSearchChange = React.useCallback((e: any) => {
		setSearch(e.target.value)
	}, [])

	const handleSubmit = React.useCallback((e: any) => {
		e.preventDefault()
		setQuery(search)
		setSearch("")
	}, [search])

	const goBack = React.useCallback(() => {
		setPage((oldPage) => Math.max(oldPage - 1, 1))
	}, [])

	const goNext = React.useCallback(() => {
		if (!isPreviousData && data && data.total_pages > page)
			setPage((oldPage) => oldPage + 1)
	}, [isPreviousData, data, page])

	return (
		<>
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
					<button type="submit" className="btn waves-effect waves-light w-100">Search</button>
				</div>
			</form>
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
			{status === 'loading' && fetchStatus === 'fetching'
				? 	<MaterializeSpinner />
				: 	status === 'error' && fetchStatus === 'idle'
					? 	<div>Error: {error.message}</div>
					:	data
						?	<>
								<ul className="collection with-header">
									<li className="collection-header"><h4>Photos</h4></li>
									{view === 'details' && <PhotoDetailsView photos={data.results} />}
								</ul>
								{view === 'thumbnails' && <PhotoThumbnailsView photos={data.results} />}
							</>
						: null
			}
			{status !== 'loading' && fetchStatus === 'fetching' && <MaterializeSpinner />}
			{data &&
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
			}
		</>
	)
}

export default PhotosPage
