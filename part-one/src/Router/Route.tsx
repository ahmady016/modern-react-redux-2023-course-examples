import React from 'react'
import { useRouterContext } from './RouterContext'

type RouteProps = {
	path: string
	children: React.ReactNode
}
const Route: React.FC<RouteProps> = ({ path = '', children }) => {
	const { currentPath } = useRouterContext()
	return currentPath === path ? children : null
}

export default Route
