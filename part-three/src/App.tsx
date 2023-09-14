import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import AppLayout from './features/Layout/AppLayout'
import HomePage from './features/Home/HomePage'
import MobilePage from './features/Mobiles/MobilePage'
import ResumesPage from './features/Resumes/ResumesPage'
import CoursesPage from './features/Courses/Index/CoursesPage'
import CoursePage from './features/Courses/Details/CoursePage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<HomePage />} />
					<Route path="mobiles" element={<MobilePage />} />
					<Route path="resumes" element={<ResumesPage />} />
					<Route path="courses" element={<Outlet />}>
						<Route index element={<CoursesPage />} />
						<Route path=":courseId" element={<CoursePage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
