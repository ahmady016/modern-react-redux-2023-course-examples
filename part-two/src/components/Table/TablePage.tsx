import React from 'react'

import { carsConfig, cars, employeesConfig, employees } from './data'

import Table from './Table'
import SortableTable from './SortableTable'

const TablePage: React.FC = () => {
	return (
		<>
			<div className="py-2 w-4/5 m-auto">
				<Table
					data={employees}
					columns={employeesConfig}
					keyField="id"
				/>
			</div>
			<div className="py-2 w-3/5 m-auto">
				<SortableTable
					data={cars}
					columns={carsConfig}
					keyField="id"
				/>
			</div>
		</>
	)
}

export default TablePage
