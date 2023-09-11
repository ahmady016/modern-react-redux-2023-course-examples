import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from './features/Layout/AppLayout'
import HomePage from './features/Home/HomePage'
import MobilePage from './features/Mobiles/MobilePage'
import ResumesPage from './features/Resumes/ResumesPage'
import CoursesPage from './features/Courses/CoursesPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<HomePage />} />
					<Route path="mobiles" element={<MobilePage />} />
					<Route path="resumes" element={<ResumesPage />} />
					<Route path="courses" element={<CoursesPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
