import React from 'react'

type TableProps = {
    data: Record<string, string>[]
    columns: Record<string, (item: Record<string, string>) => string | React.ReactNode>
    keyFn?: (item: Record<string, string>) => string
}
const Table : React.FC<TableProps> = ({ data, columns, keyFn }) => {
	return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {Object.keys(columns).map(key => <th key={key}>{key}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr className="border-b" key={keyFn ? keyFn(item) : item.id}>
                        {Object.entries(columns).map(([key, value]) => (
                            <td className="p-2" key={key}>{value(item)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
