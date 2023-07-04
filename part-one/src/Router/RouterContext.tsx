/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React from 'react'

type RouterContextValue = {
	currentPath: string
	navigateTo: (to: string) => void
}
const RouterContextDefaultValue = {
	currentPath: window.location.pathname,
    navigateTo: () => { return }
}
const RouterContext = React.createContext<RouterContextValue>(RouterContextDefaultValue)

type RouterContextProviderProps = {
	children: React.ReactNode
}
const RouterContextProvider: React.FC<RouterContextProviderProps> = ({ children }) => {
	const [currentPath, setCurrentPath] = React.useState<string>(RouterContextDefaultValue.currentPath)
    const handleNavigation = React.useCallback((to: string) => {
        setCurrentPath(to)
        window.history.pushState({}, '', to)
    }, [])

    React.useEffect(() => {
		const handleBrowserNavigation = () => setCurrentPath(window.location.pathname)
		window.addEventListener('popstate', handleBrowserNavigation)
		return () => window.removeEventListener('popstate', handleBrowserNavigation)
	}, [])

	return (
		<RouterContext.Provider value={{ currentPath, navigateTo: handleNavigation }}>
			{children}
		</RouterContext.Provider>
	)
}

export default RouterContextProvider
export function useRouterContext() {
	return React.useContext(RouterContext)
}
