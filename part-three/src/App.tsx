import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppLayout from './features/Layout/AppLayout'
import HomePage from './features/Home/HomePage'
import TasksPage from './features/Tasks/TasksPage'
import ProductsPage from './features/Products/ProductsPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<HomePage />} />
					<Route path="tasks" element={<TasksPage />} />
					<Route path="products" element={<ProductsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
