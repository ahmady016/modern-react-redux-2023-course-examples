import { createRoot } from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import M from 'materialize-css'

import App from './App.tsx'
import './index.css'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
			refetchOnMount: false,
			refetchOnReconnect: true,
			staleTime: 3 * 60000,
			retry: 3,
		}
	}
})
const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<QueryClientProvider client={queryClient}>
		<App />
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
)

const initMaterializeElements = () => {
	if (document.readyState === 'complete')
		return M.AutoInit()
	window.setTimeout(() => initMaterializeElements(), 100)
}
initMaterializeElements()
