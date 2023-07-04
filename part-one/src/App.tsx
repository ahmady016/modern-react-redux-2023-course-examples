import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'

import TasksPage from './Tasks/TasksPage'
import PhotosPage from './Photos/PhotosPage'
import CountriesPage from './Countries/CountriesPage'
import ProfileCardPage from './ProfileCard/ProfileCardPage'

import RouterContextProvider from './Router/RouterContext'
import Route from './Router/Route'

function App() {
	return (
		<RouterContextProvider>
			<Navbar />
			<main className="container">
				<Route path="/">
					<PageNotFound />
				</Route>
				<Route path="/tasks">
					<TasksPage />
				</Route>
				<Route path="/photos">
					<PhotosPage />
				</Route>
				<Route path="/countries">
					<CountriesPage />
				</Route>
				<Route path="/profile">
					<ProfileCardPage />
				</Route>
			</main>
		</RouterContextProvider>
	)
}

export default App
