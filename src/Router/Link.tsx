/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useRouterContext } from './RouterContext'

type LinkProps = {
    to: string
	children: React.ReactNode
}
const Link : React.FC<LinkProps> = ({ to, children }) => {
    const { navigateTo } = useRouterContext()
    const handleNavigation = React.useCallback((e: any) => {
        e.preventDefault()
        navigateTo(to)
    }, [to])

	return <a onClick={handleNavigation}>{children}</a>
}

export default Link
