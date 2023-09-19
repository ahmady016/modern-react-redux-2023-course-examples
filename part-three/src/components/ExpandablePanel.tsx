import React from 'react'
import { FcExpand, FcPrevious } from 'react-icons/fc'

type ExpandablePanelProps = {
    header: React.ReactNode
    children: React.ReactNode
}
const ExpandablePanel: React.FC<ExpandablePanelProps> = ({ header, children }) => {
    const [expanded, setExpanded] = React.useState(false)
    const toggleExpanded = React.useCallback(() => setExpanded(expanded => !expanded), [])

	return (
        <div className="mb-2 border rounded bg-gray-200 hover:bg-gray-300">
            <div className="p-2 flex justify-between items-center cursor-pointer">
                <div className="flex flex-row justify-between items-center">
                    {header}
                </div>
                <div className="mr-1 p-1 rounded-full bg-gray-100" onClick={toggleExpanded}>
                    {expanded ? <FcExpand /> : <FcPrevious />}
                </div>
            </div>
            {expanded && <div className="p-2 border-t">{children}</div>}
        </div>
    )
}

export default ExpandablePanel
