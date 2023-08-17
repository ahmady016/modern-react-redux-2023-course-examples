import React from 'react'
import { FcExpand } from 'react-icons/fc'

import Panel from './Panel'

type DropdownProp = {
    options: Record<string, string>
    label?: string
    value: string
    onChange: (value: string) => void
}
const Dropdown: React.FC<DropdownProp> = ({ options, label, value, onChange }) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false)
	const toggleOpened = React.useCallback(() => setIsOpen((isOpen) => !isOpen), [])

    // handle close on any click outside the dropdown element and when option selected
    const dropdownContainer = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        const handleClose = (e: React.MouseEvent<HTMLElement>) => {
            const targetId = (e.target as HTMLElement).id
            if(Object.keys(options).includes(targetId)) {
                setIsOpen(false)
                onChange(targetId)
            }
            if( dropdownContainer.current && dropdownContainer.current.id !== targetId)
                setIsOpen(false)
        }
        const _handleClose = handleClose as unknown as EventListenerOrEventListenerObject
        document.addEventListener('click', _handleClose, true)
        return () => void document.removeEventListener('click', _handleClose)
    }, [options, onChange])

    // handle dropdown selection
	const handleChange = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
		setIsOpen(false)
		onChange(e.currentTarget.id)
	}, [onChange])
    const renderedOptions = Object.entries(options).map(([key, value]) => (
        <div className="p-1 cursor-pointer rounded hover:bg-sky-100" key={key} id={key} onClick={handleChange}>{value}</div>
    ))

	return (
        <div id={label}  className="w-48 relative inline-block" ref={dropdownContainer}>
            <Panel className="flex justify-between items-center cursor-pointer" onClick={toggleOpened}>
                {value ? options[value] : label}
                <FcExpand />
            </Panel>
            {isOpen && <Panel className="w-full absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown
