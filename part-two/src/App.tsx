import DropdownPage from "./components/Dropdown/DropdownPage"
import AccordionPage from "./components/Accordion/AccordionPage"
import ButtonPage from "./components/Button/ButtonPage"

function App() {
	return (
		<div className="w-full overflow-hidden">
			<h1 className="p-3 bg-blue-600 text-white text-3xl text-center font-bold">Vite + React + Typescript + Tailwind CSS 3</h1>
			<DropdownPage />
			<AccordionPage />
			<ButtonPage />
		</div>
	)
}

export default App
