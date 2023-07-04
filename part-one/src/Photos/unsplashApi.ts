/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

interface Links2 {
	self: string
	html: string
	download: string
}

interface Urls {
	raw: string
	full: string
	regular: string
	small: string
	thumb: string
}

interface User {
	id: string
	username: string
	name: string
	first_name: string
	last_name: string
	instagram_username: string
	twitter_username: string
	portfolio_url: string
	profile_image: ProfileImage
	links: Links
}

interface Links {
	self: string
	html: string
	photos: string
	likes: string
}

interface ProfileImage {
	small: string
	medium: string
	large: string
}

export interface Photo {
	id: string
	created_at: string
	width: number
	height: number
	color: string
	blur_hash: string
	likes: number
	liked_by_user: boolean
	description: string
    alt_description: string
	user: User
	current_user_collections: any[]
	urls: Urls
	links: Links2
}
export interface PhotoResult {
	total: number
	total_pages: number
	results: Photo[]
}
export type PhotoViewProps = {
	photos: Photo[]
}

const unsplashApi =  axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID zXa3hL6eTUiwtelAxOC3btIm2PU-SZNzJHgglinFTR0',
	},
})

export const fetchPhotos = async (query = "", page = 1) => {
    const { data } = await unsplashApi.get<PhotoResult>(`/search/photos?order_by=latest&per_page=10&query=${query}&page=${page}`)
    return data
}
export function useFetchPhotos(query = "", page = 1) {
    return useQuery<PhotoResult, Error>({
        queryKey: ['photos', query, page],
        queryFn: () => fetchPhotos(query, page),
		enabled: !!query,
        keepPreviousData : true
    })
}
