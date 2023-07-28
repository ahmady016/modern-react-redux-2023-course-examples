import React from 'react'

import Table from './Table'

import { carFields, carKey, cars, employeeFields, employeeKey, employees } from './data'

const TablePage: React.FC = () => {
	return (
		<>
			<div className="py-2 w-4/5 m-auto">
				<Table
					data={employees}
					columns={employeeFields as Record<string, (employee: Record<string, string>) => string | React.ReactNode>}
					keyFn={employeeKey as (item: Record<string, string>) => string}
				/>
			</div>
			<div className="py-2 w-3/5 m-auto">
				<Table
					data={cars}
					columns={carFields as Record<string, (car: Record<string, string>) => string | React.ReactNode>}
					keyFn={carKey as (item: Record<string, string>) => string}
				/>
			</div>
		</>
	)
}

export default TablePage
