import React from "react"

function useSort(data: Record<string, string | number>[]) {
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
        } else {
            setSortedData([...data])
        }
        console.log("🚀: SortableTable -> handleSort -> sortField:", sortField)
        console.log("🚀: SortableTable -> handleSort -> sortDirection:", sortDirection)
    }, [sortField, sortDirection])

    return {
        sortField,
        sortDirection,
        sortedData,
        handleSort
    }
}
export default useSort
