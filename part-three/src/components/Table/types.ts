export type ColumnConfig = {
    field: string
    label: string
    renderCell?: (item: Record<string, string | number>) => string | React.ReactNode
    renderHeader?: () => string | React.ReactNode
	sortable?: boolean
}
export type TableProps = {
    data: Record<string, string | number>[]
    columns: ColumnConfig[]
    keyField?: string
    keyFn?: (item: Record<string, string | number>) => string
}
