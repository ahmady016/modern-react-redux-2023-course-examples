import React from 'react'
import styled from '@emotion/styled'

import { PhotoViewProps } from '../unsplashApi'

export const PhotoGallery = styled.div`
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
		&:nth-child(2n + 1) {
			grid-row-end: span 2;
		}
	}
`
export const PhotoThumbnailsView: React.FC<PhotoViewProps> = ({ photos }) => {
	return (
		<PhotoGallery>
			{photos.map(({ id, urls, alt_description }) => (
				<img
					key={id}
					src={urls.thumb}
					alt={alt_description}
					title={alt_description}
				/>
			))}
		</PhotoGallery>
	)
}
