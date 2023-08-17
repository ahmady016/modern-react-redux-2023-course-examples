import React, { Fragment } from 'react'
import { nanoid } from 'nanoid'

import { TableProps } from './types'

const Table : React.FC<TableProps> = ({ data, columns, keyField, keyFn }) => {
	return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {columns.map(({ field, label, renderHeader }) => (
                        renderHeader
                            ? <Fragment key={field}>{renderHeader()}</Fragment>
                            : <th key={field}>{label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr className="border-b" key={keyFn ? keyFn(item) : keyField ? item[keyField] : nanoid()}>
                        {columns.map(({ field, renderCell }) => (
                            renderCell
                                ? <Fragment key={field}>{renderCell(item)}</Fragment>
                                : <td className="p-2" key={field}>{item[field]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
