import React from 'react'

import { FcExpand } from 'react-icons/fc'
import Panel from './Panel'

type DropdownProp = {
    options: Record<string, string>
    isOpen: boolean
    toggleOpened: () => void
    value: string
    onChange: (e: React.MouseEvent<HTMLElement>) => void
}
const Dropdown: React.FC<DropdownProp> = ({ options, isOpen, toggleOpened, value, onChange }) => {
	const renderedOptions = Object.entries(options).map(([key, value]) => (
        <div className="p-1 cursor-pointer rounded hover:bg-sky-100" key={key} id={key} onClick={onChange}>{value}</div>
    ))

	return (
        <div className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={toggleOpened}>
                {value ? options[value] : 'Select Country ...'}
                <FcExpand />
            </Panel>
            {isOpen && <Panel className="w-full absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown
