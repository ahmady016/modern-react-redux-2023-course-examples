import React from 'react'

import { carsConfig, cars, employeesConfig, employees } from './data'
import Table from './Table'

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
				<Table
					data={cars}
					columns={carsConfig}
					keyField="id"
				/>
			</div>
		</>
	)
}

export default TablePage
