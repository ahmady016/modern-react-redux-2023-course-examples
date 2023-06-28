import React from 'react'
import { PhotoViewProps } from '../unsplashApi'

export const PhotoDetailsView: React.FC<PhotoViewProps> = ({ photos }) => {
	return photos.map(({ id, urls, alt_description, likes, created_at }) => (
		<li className="collection-item avatar" key={id}>
			<img className="circle" src={urls.thumb} alt={alt_description} />
			<span className="title">{alt_description}</span>
			<p>liked: {likes}</p>
			<p>createdAt: {created_at}</p>
		</li>
	))
}
