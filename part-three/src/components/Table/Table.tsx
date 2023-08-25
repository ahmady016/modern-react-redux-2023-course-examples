import React, { Fragment } from 'react'
import { nanoid } from 'nanoid'

import { TableProps } from './types'

const Table : React.FC<TableProps> = ({ data, columns, keyField, keyFn }) => {
	return (
        <div className="border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        {columns.map(({ field, label, renderHeader }) => (
                            renderHeader
                                ? <Fragment key={field}>{renderHeader()}</Fragment>
                                : <th key={field} className="py-3.5 px-4 text-sm font-semibold text-center rtl:text-right text-gray-500 dark:text-gray-400">{label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {data.map(item => (
                        <tr className="border-b" key={keyFn ? keyFn(item) : keyField ? item[keyField] : nanoid()}>
                            {columns.map(({ field, renderCell }) =>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap" key={field}>{renderCell ? renderCell(item) : item[field]}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
