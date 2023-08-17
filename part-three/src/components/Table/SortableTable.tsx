import React from 'react'
import { FcCollapse, FcExpand } from 'react-icons/fc'

import { TableProps } from './types'
import Table from './Table'
import useSort from './useSort'

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
    const { sortDirection, sortField, sortedData, handleSort } = useSort(data)
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
