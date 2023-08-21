import { BrowserRouter, Routes, Route } from "react-router-dom"

import AppLayout from "./features/Layout/AppLayout"
import HomePage from "./features/Home/HomePage"
import TasksPage from "./features/Tasks/TasksPage"
import StorePage from "./features/Store/StorePage"

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<HomePage />} />
					<Route path="tasks" element={<TasksPage />} />
					<Route path="store" element={<StorePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
  )
}

export default App
