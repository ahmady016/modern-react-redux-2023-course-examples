import React from 'react'
import { FcCollapse, FcExpand } from 'react-icons/fc'

import { TableProps } from './data'
import Table from './Table'

type SortIconProps = {
    currentField: string
    sortField: string | undefined
    sortDirection: 'asc' | 'desc' | undefined
}
const SortIcon : React.FC<SortIconProps> = ({ currentField, sortField, sortDirection }) => {
    if(currentField !== sortField || sortDirection === undefined)
        return <div className="ml-1"><FcCollapse /><FcExpand /></div>
    if(sortDirection === 'asc')
        return <FcCollapse className="ml-1" />
    if(sortDirection === 'desc')
        return <FcExpand className="ml-1" />
    return null
}

const SortableTable : React.FC<TableProps> = ({ data, columns, keyField, keyFn }) => {
    const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc' | undefined>(undefined)
    const [sortField, setSortField] = React.useState<string | undefined>(undefined)
    const [sortedData, setSortedData] = React.useState(data)

    const handleSort = React.useCallback((e: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => {
        const currentField = e.currentTarget.id
        // sort ascending by default when clicking on a header for the first time
        if (sortDirection === undefined || sortField !== currentField) {
            setSortDirection('asc')
            setSortField(currentField)
        }
        // sort descending when clicking on an ascending sorted header
        else if (sortDirection === 'asc') {
            setSortDirection('desc')
            setSortField(currentField)
        }
        // reset sorting when clicking on a descending sorted header
        else if (sortDirection === 'desc') {
            setSortDirection(undefined)
            setSortField(undefined)
        }
    }, [sortField, sortDirection])

    React.useEffect(() => {
        if (sortDirection && sortField) {
            let newSortedData = [...data].sort((a, b) => {
                const valueA = a[sortField]
                const valueB = b[sortField]
                const sortOrder = sortDirection === 'asc' ? 1 : -1
                if (typeof valueA === 'string' && typeof valueB === 'string')
                    return valueA.localeCompare(valueB) * sortOrder
                if (typeof valueA === 'number' && typeof valueB === 'number')
                    return (valueA - valueB) * sortOrder
                throw Error(`Cannot compare values of type ${typeof valueA}`)
            })
            setSortedData(newSortedData)
        }
        console.log("🚀: SortableTable -> handleSort -> sortField:", sortField)
        console.log("🚀: SortableTable -> handleSort -> sortDirection:", sortDirection)
    }, [sortField, sortDirection])

    const sortableColumns = columns.map(column =>
        (column.sortable)
            ?   {   ...column,
                    renderHeader: () =>
                        <th className="cursor-pointer hover:bg-gray-200" key={column.field} id={column.field} onClick={handleSort}>
                            <div className="flex items-center">
                                <SortIcon
                                    currentField={column.field}
                                    sortField={sortField}
                                    sortDirection={sortDirection}
                                />
                                <span className="ml-2">{column.label}</span>
                            </div>
                        </th>
                }
            : column
    )
	return (
        <Table
            data={sortedData}
            columns={sortableColumns}
            keyField={keyField}
            keyFn={keyFn}
        />
    )
}

export default SortableTable
