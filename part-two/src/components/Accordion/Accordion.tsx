import React from 'react'
import { FcExpand, FcCollapse } from 'react-icons/fc'

import { AccordionItem } from './data'

type AccordionProps = {
    items: AccordionItem[]
}
const Accordion : React.FC<AccordionProps> = ({ items }) => {
    const [selectedId, setSelectedId] = React.useState<string>('')
    const handleSelection = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        const nextId = e.currentTarget.id
        setSelectedId(selectedId => nextId !== selectedId ? nextId : '')
    }, [])

	return items.map(({ id, title, content }) => {
        const isExpanded = id === selectedId
        return (
            <div className="border-x border-t rounded" key={id}>
                <h3 className="p-3 bg-gray-100 border-b cursor-pointer flex justify-between items-center" id={id} onClick={handleSelection}>
                    <span>{title}</span>
                    <span>{isExpanded ? <FcExpand /> : <FcCollapse />}</span>
                </h3>
                {isExpanded && <p className="border-b p-5">{content}</p>}
            </div>
        )
    })
}

export default Accordion
