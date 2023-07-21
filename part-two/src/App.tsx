import { BrowserRouter, Routes, Route } from "react-router-dom"

import AppLayout from "./components/Layout/AppLayout"

import HomePage from "./components/Home/HomePage"
import ButtonPage from "./components/Button/ButtonPage"
import AccordionPage from "./components/Accordion/AccordionPage"
import DropdownPage from "./components/Dropdown/DropdownPage"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index 			element={<HomePage />} />
					<Route path="button" 	element={<ButtonPage />} />
					<Route path="accordion" element={<AccordionPage />} />
					<Route path="dropdown" 	element={<DropdownPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
